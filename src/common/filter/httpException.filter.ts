import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { isArray } from 'lodash';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    console.error(`responded with status: ${status}: ${exception.message}`);
    // this.logger.log(`responded with status: ${status}: ${exception.message}`);
    const errResponse = exception.getResponse();

    if (typeof errResponse === 'string') {
      response.status(status).json({
        data: null,
        status,
        msg: errResponse,
      });
    } else if ((errResponse as any).message) {
      response.status(status).json({
        data: null,
        status,
        msg: isArray((errResponse as any).message)
          ? (errResponse as any).message.join(';')
          : (errResponse as any).message,
      });
    } else {
      response.status(status).json({
        data: null,
        status,
        msg: (errResponse as any).error,
      });
    }
  }
}

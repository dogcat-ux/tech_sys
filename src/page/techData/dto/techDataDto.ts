import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { ClientRequestArgs } from 'http';
import { QUERY_TYPE } from 'src/common/const/const';

export class TechDataDto {
  @IsString()
  username: string;

  @IsNumber()
  @IsPositive()
  password: number;

  @IsBoolean()
  @IsOptional()
  role: string;
}

export class SpiderDataDto {
  @IsString()
  url: string;

  @IsOptional()
  options: ClientRequestArgs;

  @IsString()
  queryClassPath: string;

  @IsString()
  queryType: QUERY_TYPE;
}

export class TechDataSpiderDto {
  @IsOptional()
  imgData: SpiderDataDto;

  titleData: SpiderDataDto;

  @IsOptional()
  textData: SpiderDataDto;

  @IsOptional()
  desData: SpiderDataDto;
}

// export class SpiderOptions{
//   @IsString()
//   url:string;

//   @IsString()
//   method?:string;
// }

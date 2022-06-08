import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IRole } from '../const/role';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  public canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<IRole[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    // const request = context.switchToHttp().getRequest<Request>();
    // const user = request.user!;

    // const roleIdx = ROLES.indexOf(user.role);
    // const hasRole = roles.some((role) => roleIdx <= ROLES.indexOf(role));

    // return hasRole;
  }
}

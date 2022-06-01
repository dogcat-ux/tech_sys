import { SetMetadata } from '@nestjs/common';
import { IRole } from '../const/role';

export const Roles = (...roles: IRole[]) => SetMetadata('roles', roles);

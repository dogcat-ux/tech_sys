import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class LoginDto {
  @IsString()
  username: string;

  @IsNumber()
  @IsPositive()
  password: number;

  @IsBoolean()
  @IsOptional()
  role: string;
}

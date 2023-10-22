import { IsString, IsNotEmpty, IsEnum, IsNumber } from 'class-validator';
import { Role } from '../enums';

export class SignInDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  readonly role: Role;
}
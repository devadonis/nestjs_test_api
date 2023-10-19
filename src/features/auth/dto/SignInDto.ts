import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from './role';

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
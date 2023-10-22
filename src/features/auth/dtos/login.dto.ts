import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'User Name: admin, normal, limited'
  })
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty({
    description: 'Password: same with username'
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
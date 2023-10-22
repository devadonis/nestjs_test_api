import { Controller, UseGuards,  Request, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { AuthService } from './auth.service';
import { ApiTags, ApiQuery, ApiBody } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards';
import { Public } from './decorators';
import { LoginDto } from './dtos';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @Public()
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiQuery({type: LoginDto})
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}

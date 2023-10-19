import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy, JwtStrategy } from './strategies';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const secretKey = configService.get<string>('jwt.secretKey');
        const expiresIn = configService.get<string>('jwt.expiresIn');

        return {
          secret: secretKey,
          signOptions: { expiresIn }
        };
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, {provide: APP_GUARD, useClass: JwtAuthGuard}]
})
export class AuthModule {}

import { registerAs } from '@nestjs/config';

export const jwtConfig = registerAs('jwt', () => ({
  secretKey: process.env.SECRET_KEY,
  expiresIn: process.env.JWT_EXPIRES_IN
}));

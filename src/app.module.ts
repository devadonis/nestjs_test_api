import { Module, Inject } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { databaseConfig, jwtConfig } from './config';
import { AuthModule } from './features/auth/auth.module';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true,
      load: [databaseConfig, jwtConfig]
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    @Inject(databaseConfig.KEY)
    private dbConf: ConfigType<typeof databaseConfig>,
    @Inject(jwtConfig.KEY)
    private jwtConf: ConfigType<typeof jwtConfig>
  ) {
    console.log(dbConf, jwtConf);
  }
}

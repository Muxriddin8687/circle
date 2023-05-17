import { Module } from '@nestjs/common';
import { MysqlModule } from 'nest-mysql';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ContactModule } from './modules/contact/contact.module';
import { MessageModule } from './modules/message/message.module';
import { HomeModule } from './modules/home/home.module';
import { CarouselModule } from './modules/carousel/carousel.module';
import { MulterModule } from '@nestjs/platform-express/multer';
import { memoryStorage } from 'multer';
import { ConfigModule } from '@nestjs/config';

import { getEnvPath } from './core/envs/env.helpers';
import { AuthModule } from './modules/auth/auth.module';
import { CircleModule } from './modules/circle/circle.module';
const envFilePath: string = getEnvPath('./src/core/envs');

@Module({
  imports: [
    MessageModule,
    ContactModule,
    HomeModule,
    MysqlModule.forRoot({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      database: 'togarak',
    }),
    CarouselModule,
    ConfigModule.forRoot({ envFilePath: envFilePath, isGlobal: true }),
    MulterModule.register({
      storage: memoryStorage(),
    }),
    AuthModule,
    CircleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module, ValidationPipe } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    CacheModule.register({
      ttl: 3_600_000, // milliseconds
      max: 1000, // maximum number of items in cache
    }),
    HttpModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        ELECTRICITY_TARIFFS_API: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}

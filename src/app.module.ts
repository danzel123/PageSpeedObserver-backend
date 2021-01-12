import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasurementsModule } from './measurements/measurements.module';
import * as process from "process";
import { ScheduleModule } from '@nestjs/schedule';
import {TasksService} from "./measurements/measurements.cron";

const username = process.env.POSTGRES_USER || 'postgres';
const password = process.env.POSTGRES_PASSWORD || 'example';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username,
      password,
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    MeasurementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

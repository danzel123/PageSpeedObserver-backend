import {HttpModule, Module} from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasurementEntity } from './entities/measurement.entity';
import { MeasurementsService } from './measurements.service';
import { MeasurementsController } from './measurements.controller';
import {TasksService} from "./measurements.cron";

@Module({
    controllers: [MeasurementsController],
    providers: [MeasurementsService, TasksService],
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([MeasurementEntity])
    ]
})
export class MeasurementsModule {}

import {Controller, Get} from '@nestjs/common';
import {MeasurementEntity} from "./entities/measurement.entity";
import {MeasurementsService} from "./measurements.service";

@Controller('measurements')
export class MeasurementsController {
    constructor(private measurementsService:MeasurementsService) {
    }
    @Get()
    findAll(): Promise<MeasurementEntity[]>{
        return this.measurementsService.findAll()
    }
}

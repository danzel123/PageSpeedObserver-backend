import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {MeasurementEntity} from "./entities/measurement.entity";
import {CreateMeasureDto} from "./dto/create-measure.dto";

@Injectable()
export class MeasurementsService {
    constructor(
        @InjectRepository(MeasurementEntity)
        private readonly measurementsRepository: Repository<MeasurementEntity>,
    ) {}

    create(createMeasureDto: CreateMeasureDto): Promise<MeasurementEntity>{
        const measure = new MeasurementEntity()
        measure.firstContentfulPaint = createMeasureDto.data.firstContentfulPaint
        measure.speedIndex = createMeasureDto.data.speedIndex
        measure.timeToInteractive = createMeasureDto.data.timeToInteractive
        measure.firstMeaningfulPaint = createMeasureDto.data.firstMeaningfulPaint
        measure.firstCpuIdle = createMeasureDto.data.firstCpuIdle
        measure.estimatedInputLatency = createMeasureDto.data.estimatedInputLatency
        measure.time = createMeasureDto.time
        return this.measurementsRepository.save(measure)
    }

    async findAll(): Promise<MeasurementEntity[]> {
        return this.measurementsRepository.find();
    }

}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MeasurementEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({unique: true})
    time: string;

    @Column()
    firstContentfulPaint: string
    @Column()
    speedIndex: string
    @Column()
    timeToInteractive: string
    @Column()
    firstMeaningfulPaint: string
    @Column()
    firstCpuIdle: string
    @Column()
    estimatedInputLatency: string
}

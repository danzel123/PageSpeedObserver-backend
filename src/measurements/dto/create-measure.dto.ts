export class CreateMeasureDto{
    time: string
    data: IValues;
}

interface IValues{
    firstContentfulPaint: string;
    speedIndex: string;
    timeToInteractive: string;
    firstMeaningfulPaint: string;
    firstCpuIdle: string;
    estimatedInputLatency: string;
}

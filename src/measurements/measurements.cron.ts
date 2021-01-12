import {HttpService, Injectable, Logger} from '@nestjs/common';
import {Cron, Interval, Timeout} from '@nestjs/schedule';
import {MeasurementsService} from "./measurements.service";


@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);
    constructor(private measurementsService: MeasurementsService,
                private httpService: HttpService)
    {
        this.logger.debug('Called when created');


    }
    @Timeout(5000)
    handleTimeout() {
        this.logger.debug('Called once after 5 seconds');
    }

    //@Interval(5000)
    // handleCron() {
    //     function setUpQuery() {
    //         const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
    //         const parameters = {
    //             url: encodeURIComponent('https://angular.thebell.io/'),
    //             key: 'AIzaSyDShFTc4EgwS28pXfDc57qwNwb76HLec8o'
    //         };
    //         let query = `${api}?`;
    //         for (let key in parameters) {
    //             query += `${key}=${parameters[key]}&`;
    //         }
    //         return query;
    //     }
    //     const url = setUpQuery()
    //     this.logger.debug('запрос пошел');
    //     this.httpService.get(url).subscribe(res => {
    //         const lighthouse = res.data.lighthouseResult;
    //         const time = lighthouse.fetchTime;
    //         const lighthouseMetrics = {
    //             'firstContentfulPaint': lighthouse.audits['first-contentful-paint'].displayValue,
    //             'speedIndex': lighthouse.audits['speed-index'].displayValue,
    //             'timeToInteractive': lighthouse.audits['interactive'].displayValue,
    //             'firstMeaningfulPaint': lighthouse.audits['first-meaningful-paint'].displayValue,
    //             'firstCpuIdle': lighthouse.audits['first-cpu-idle'].displayValue,
    //             'estimatedInputLatency': lighthouse.audits['estimated-input-latency'].displayValue
    //         }
    //         const obj = {time, data: lighthouseMetrics}
    //         console.log(obj)
    //         this.measurementsService.create(obj)
    //     }, error => {console.log(error)})
    //     // this.measurementsService.create({data: 'opa'})
    //     this.logger.debug('Called when the current second is 5');
    // }
}

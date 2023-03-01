import { Injectable } from "@angular/core";
import { request } from "http";
import { Observable } from "rxjs";
import { ApiClient } from 'src/app/services/api-services/api-client';
import { PaceCalculator } from "../store/model/pace-calculator.model";
import { PaceCalculatorPaceRequest } from "./api-data-contracts/pace-calculator-pace/pace-calculator-pace-request";
import { PaceCalculatorTimeRequest } from "./api-data-contracts/pace-calculator-time/pace-calculator-time-request";

@Injectable({
    providedIn: 'root',
})
export class PaceCalculatorService {
    constructor(private apiService: ApiClient) {}

    calculatePace: (request: PaceCalculatorPaceRequest) =>
        Observable<PaceCalculator> = (request) =>
        this.apiService.post<PaceCalculatorPaceRequest, PaceCalculator>('api/PaceController/CalculatePace', request)

    calculateTime(request: PaceCalculatorTimeRequest) {
        return this.apiService.post<any, any>('api/PaceCalculator/CalculateTime', request);
    }
}
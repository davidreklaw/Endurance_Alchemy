import { Injectable } from "@angular/core";
import { request } from "http";
import { Observable } from "rxjs";
import { ApiClient } from 'src/app/services/api-services/api-client';

@Injectable({
    providedIn: 'root',
})
export class PaceCalculatorService {
    constructor(private apiService: ApiClient) {}

    paceCalculate: (request: any) =>
        Observable<any> = (request) =>
        this.apiService.post<any, any>('api/', request)
}
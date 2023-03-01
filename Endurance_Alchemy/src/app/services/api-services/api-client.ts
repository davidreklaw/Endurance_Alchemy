import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiClient {

    constructor(private httpClient: HttpClient) {}

    post<TRequest, TResponse>(
        path: string,
        requestBody: TRequest
      ): Observable<TResponse> {
        return this.httpClient
          .post<TResponse>(environment.apiurl + path, requestBody, {
            withCredentials: true
          });
      }
    
    get<TRequest, TResponse>(
        path: string,
        requestBody: TRequest
    ): Observable<TResponse> {
        return this.httpClient
          .get<TResponse>(environment.apiurl + path, requestBody)
          .pipe(catchError(this.handleUnauthorizedResponse<TResponse>()));
    }
    
    handleUnauthorizedResponse<TResponse>() {
        return (err: HttpErrorResponse): Observable<TResponse> => {
          console.log(err);
    
          return of();
        };
    }
}
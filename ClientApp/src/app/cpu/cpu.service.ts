import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Cpu } from "./cpu";

@Injectable({
  providedIn: 'root'
})
export class CPUService {

  private apiURL = "https://localhost:44364/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getCPUs(): Observable<Cpu[]> {
    return this.httpClient.get<Cpu[]>(this.apiURL + '/cpu/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getCPU(id): Observable<Cpu> {
    return this.httpClient.get<Cpu>(this.apiURL + '/cpu/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createCPU(cpu): Observable<Cpu> {
    return this.httpClient.post<Cpu>(this.apiURL + '/cpu/', JSON.stringify(cpu), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateCPU(id, cpu): Observable<Cpu> {
    return this.httpClient.put<Cpu>(this.apiURL + '/cpu/' + id, JSON.stringify(cpu), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteCPU(id) {
    return this.httpClient.delete<Cpu>(this.apiURL + '/cpu/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Unit } from "./unit";

@Injectable({
  providedIn: 'root'
})

export class UnitService {

  private apiURL = "https://localhost:44364/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getUnits(): Observable<Unit[]> {
    return this.httpClient.get<Unit[]>(this.apiURL + '/unit/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getUnit(id): Observable<Unit> {
    return this.httpClient.get<Unit>(this.apiURL + '/unit/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createUnit(unit): Observable<Unit> {
    return this.httpClient.post<Unit>(this.apiURL + '/unit/', JSON.stringify(unit), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateUnit(id, unit): Observable<Unit> {
    return this.httpClient.put<Unit>(this.apiURL + '/unit/' + id, JSON.stringify(unit), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  
  deleteUnit(id) {
    return this.httpClient.delete<Unit>(this.apiURL + '/unit/' + id, this.httpOptions)
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Laptop } from './laptop';


@Injectable({
  providedIn: 'root'
})
export class LaptopsService {

  private apiURL = "https://localhost:44364/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getLaptops(): Observable<Laptop[]> {
    return this.httpClient.get<Laptop[]>(this.apiURL + '/laptop/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getLaptop(id): Observable<Laptop> {
    return this.httpClient.get<Laptop>(this.apiURL + '/laptop/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createLaptop(laptop): Observable<Laptop> {
    return this.httpClient.post<Laptop>(this.apiURL + '/laptop/', JSON.stringify(laptop), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateLaptop(id, laptop): Observable<Laptop> {
    return this.httpClient.put<Laptop>(this.apiURL + '/laptop/' + id, JSON.stringify(laptop), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteLaptop(id) {
    return this.httpClient.delete<Laptop>(this.apiURL + '/laptop/' + id, this.httpOptions)
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

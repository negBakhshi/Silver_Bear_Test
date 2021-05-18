import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Port } from './port';

@Injectable({
  providedIn: 'root'
})

export class PortService {

  private apiURL = "https://localhost:44364/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getPorts(): Observable<Port[]> {
    return this.httpClient.get<Port[]>(this.apiURL + '/port/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getPort(id): Observable<Port> {
    return this.httpClient.get<Port>(this.apiURL + '/port/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createPort(port): Observable<Port> {
    return this.httpClient.post<Port>(this.apiURL + '/port/', JSON.stringify(port), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updatePort(id, port): Observable<Port> {
    return this.httpClient.put<Port>(this.apiURL + '/port/' + id, JSON.stringify(port), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deletePort(id) {
    return this.httpClient.delete<Port>(this.apiURL + '/port/' + id, this.httpOptions)
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

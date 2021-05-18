import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Memory } from "./memory";

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  private apiURL = "https://localhost:44364/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getMemories(): Observable<Memory[]> {
    return this.httpClient.get<Memory[]>(this.apiURL + '/memory/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getMemory(id): Observable<Memory> {
    return this.httpClient.get<Memory>(this.apiURL + '/memory/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createMemory(memory): Observable<Memory> {
    return this.httpClient.post<Memory>(this.apiURL + '/memory/', JSON.stringify(memory), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateMemory(id, memory): Observable<Memory> {
    return this.httpClient.put<Memory>(this.apiURL + '/memory/' + id, JSON.stringify(memory), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteMemory(id) {
    return this.httpClient.delete<Memory>(this.apiURL + '/memory/' + id, this.httpOptions)
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

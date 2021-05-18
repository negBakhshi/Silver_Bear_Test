import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Storage } from "./storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private apiURL = "https://localhost:44364/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getStorages(): Observable<Storage[]> {
    return this.httpClient.get<Storage[]>(this.apiURL + '/storage/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getStorage(id): Observable<Storage> {
    return this.httpClient.get<Storage>(this.apiURL + '/storage/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createStorage(storage): Observable<Storage> {
    return this.httpClient.post<Storage>(this.apiURL + '/storage/', JSON.stringify(storage), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateStorage(id, storage): Observable<Storage> {
    return this.httpClient.put<Storage>(this.apiURL + '/storage/' + id, JSON.stringify(storage), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteStorage(id) {
    return this.httpClient.delete<Storage>(this.apiURL + '/storage/' + id, this.httpOptions)
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

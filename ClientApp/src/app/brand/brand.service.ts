import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Brand } from "./brand";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiURL = "https://localhost:44364/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.apiURL + '/brand/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getBrand(id): Observable<Brand> {
    return this.httpClient.get<Brand>(this.apiURL + '/brand/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createBrand(name): Observable<string> {
    return this.httpClient.post<string>(this.apiURL + '/brand/', JSON.stringify(name), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateBrand(id, brand): Observable<Brand> {
    return this.httpClient.put<Brand>(this.apiURL + '/brand/' + id, JSON.stringify(brand), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteBrand(id) {
    return this.httpClient.delete<Brand>(this.apiURL + '/brand/' + id, this.httpOptions)
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

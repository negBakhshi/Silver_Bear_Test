import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GraphicCard } from "./graphic-card";

@Injectable({
  providedIn: 'root'
})
export class GraphicCardService {

  private apiURL = "https://localhost:44364/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getGraphicCards(): Observable<GraphicCard[]> {
    return this.httpClient.get<GraphicCard[]>(this.apiURL + '/graphicCard/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getGraphicCard(id): Observable<GraphicCard> {
    return this.httpClient.get<GraphicCard>(this.apiURL + '/graphicCard/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createGraphicCard(graphiccard): Observable<GraphicCard> {
    return this.httpClient.post<GraphicCard>(this.apiURL + '/graphicCard/', JSON.stringify(graphiccard), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateGraphicCard(id, graphiccard): Observable<GraphicCard> {
    return this.httpClient.put<GraphicCard>(this.apiURL + '/graphicCard/' + id, JSON.stringify(graphiccard), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteGraphicCard(id) {
    return this.httpClient.delete<GraphicCard>(this.apiURL + '/graphicCard/' + id, this.httpOptions)
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

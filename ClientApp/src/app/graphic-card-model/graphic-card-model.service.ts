import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GraphicCardModel } from "./graphic-card-model";

@Injectable({
  providedIn: 'root'
})
export class GraphicCardModelService {

  private apiURL = "https://localhost:44364/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getGraphicCardModels(): Observable<GraphicCardModel[]> {
    return this.httpClient.get<GraphicCardModel[]>(this.apiURL + '/graphicCardModel/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getGraphicCardModel(id): Observable<GraphicCardModel> {
    return this.httpClient.get<GraphicCardModel>(this.apiURL + '/graphicCardModel/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createGraphicCardModel(graphicCardModel): Observable<GraphicCardModel> {
    return this.httpClient.post<GraphicCardModel>(this.apiURL + '/graphicCardModel/', JSON.stringify(graphicCardModel), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateGraphicCardModel(id, graphicCardModel): Observable<GraphicCardModel> {
    return this.httpClient.put<GraphicCardModel>(this.apiURL + '/graphicCardModel/' + id, JSON.stringify(graphicCardModel), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteGraphicCardModel(id) {
    return this.httpClient.delete<GraphicCardModel>(this.apiURL + '/graphicCardModel/' + id, this.httpOptions)
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

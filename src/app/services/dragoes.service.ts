import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {retry, catchError, map} from 'rxjs/operators';
import { Dragoes } from '../models/dragoes';

@Injectable({
  providedIn: 'root'
})
export class DragoesService {
  url = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getDragoes(): Observable<Dragoes[]> {
    return this.httpClient.get<Dragoes[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getDragaoById(id: number): Observable<Dragoes> {
    return this.httpClient.get<Dragoes>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  saveDragao(dragao: Dragoes): Observable<Dragoes> {
    return this.httpClient.post<Dragoes>(this.url, JSON.stringify(dragao), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  updateDragao(dragao: Dragoes): Observable<Dragoes> {
    return this.httpClient.put<Dragoes>(this.url + '/' + dragao.id, JSON.stringify(dragao), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  deleteDragao(dragao: Dragoes) {
    return this.httpClient.delete<Dragoes>(this.url + '/' + dragao.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.debug(errorMessage);
    return throwError(errorMessage);
  };

}

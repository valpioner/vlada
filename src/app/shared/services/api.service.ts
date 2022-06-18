import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, Observable, throwError } from 'rxjs';
import { ZalSeat } from '../models/zal-seat';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _apiURL = 'https://data.rada.gov.ua';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getZalSeats(): Observable<ZalSeat[]> {
    return (
      this.http
        // .get<ZalSeat[]>(this.apiURL + '/ogd/zal/map/map_zal-skl9.json')
        .get<ZalSeat[]>('assets/map_zal-skl9.json')
        .pipe(retry(1), catchError(this.handleError))
    );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, Observable, throwError, take, tap } from 'rxjs';
import { MpsData } from '../models/open-data/mps-data';
import { MpPhoto } from '../models/open-data/mps-photo-map';
import { ZalFraction } from '../models/open-data/zal-fraction';
import { ZalSeat } from '../models/open-data/zal-seat';

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
        .pipe(retry(1), catchError(this.handleError), take(1))
    );
  }

  getZalFractions(): Observable<ZalFraction[]> {
    return (
      this.http
        // .get<ZalSeat[]>(this.apiURL + '/ogd/zal/map/map_zal_fr-skl9.json')
        .get<ZalFraction[]>('assets/map_zal_fr-skl9.json')
        .pipe(retry(1), catchError(this.handleError), take(1))
    );
  }

  getMpsData(): Observable<MpsData> {
    return (
      this.http
        // .get<ZalSeat[]>(this.apiURL + '/ogd/zal/map/map_zal_fr-skl9.json')
        .get<MpsData>('assets/mps-data.json')
        .pipe(retry(1), catchError(this.handleError), take(1))
    );
  }

  getMpsPhoto() {
    return this.http
      .get<MpPhoto[]>('assets/mps-foto/_map.json')
      .pipe(retry(1), catchError(this.handleError), take(1));
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

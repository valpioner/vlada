import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ZalFraction } from '../shared/models/open-data/zal-fraction';
import { ZalSeat, ZalSeatWithGap } from '../shared/models/open-data/zal-seat';

import { ApiService } from '../shared/services/api.service';

const gaps = [
  { row: 2, col: 20, gap: 18 },
  { row: 2, col: 22, gap: 1 },
  { row: 2, col: 24, gap: 1 },
  { row: 2, col: 26, gap: 1 },
  { row: 2, col: 28, gap: 1 },

  { row: 4, col: 24, gap: 22 },

  { row: 6, col: 12, gap: 10 },
  { row: 6, col: 20, gap: 3 },
  { row: 6, col: 25, gap: 1 },
  { row: 6, col: 32, gap: 3 },

  { row: 7, col: 11, gap: 9 },
  { row: 7, col: 19, gap: 3 },
  { row: 7, col: 25, gap: 1 },
  { row: 7, col: 33, gap: 3 },

  { row: 8, col: 8, gap: 6 },
  { row: 8, col: 17, gap: 3 },
  { row: 8, col: 25, gap: 1 },
  { row: 8, col: 35, gap: 3 },

  { row: 9, col: 7, gap: 5 },
  { row: 9, col: 16, gap: 3 },
  { row: 9, col: 25, gap: 1 },
  { row: 9, col: 36, gap: 3 },

  { row: 10, col: 6, gap: 4 },
  { row: 10, col: 15, gap: 3 },
  { row: 10, col: 25, gap: 1 },
  { row: 10, col: 37, gap: 3 },

  { row: 11, col: 4, gap: 2 },
  { row: 11, col: 13, gap: 3 },
  { row: 11, col: 20, gap: 2 },
  { row: 11, col: 25, gap: 1 },
  { row: 11, col: 31, gap: 2 },
  { row: 11, col: 39, gap: 3 },
  { row: 11, col: 46, gap: 1 },

  { row: 12, col: 4, gap: 2 },
  { row: 12, col: 11, gap: 2 },
  { row: 12, col: 19, gap: 2 },
  { row: 12, col: 25, gap: 1 },
  { row: 12, col: 32, gap: 2 },
  { row: 12, col: 40, gap: 2 },
  { row: 12, col: 46, gap: 1 },

  { row: 13, col: 4, gap: 2 },
  { row: 13, col: 11, gap: 4 },
  { row: 13, col: 19, gap: 2 },
  { row: 13, col: 25, gap: 1 },
  { row: 13, col: 32, gap: 2 },
  { row: 13, col: 42, gap: 4 },
  { row: 13, col: 46, gap: 1 },

  { row: 14, col: 4, gap: 2 },
  { row: 14, col: 9, gap: 3 },
  { row: 14, col: 18, gap: 2 },
  { row: 14, col: 25, gap: 1 },
  { row: 14, col: 33, gap: 2 },
  { row: 14, col: 43, gap: 3 },
  { row: 14, col: 46, gap: 1 },

  { row: 16, col: 8, gap: 5 },
  { row: 16, col: 17, gap: 2 },
  { row: 16, col: 25, gap: 1 },
  { row: 16, col: 34, gap: 2 },
  { row: 16, col: 46, gap: 5 },

  { row: 17, col: 6, gap: 3 },
  { row: 17, col: 16, gap: 2 },
  { row: 17, col: 25, gap: 1 },
  { row: 17, col: 35, gap: 2 },
  { row: 17, col: 46, gap: 3 },

  { row: 18, col: 7, gap: 4 },
  { row: 18, col: 16, gap: 2 },
  { row: 18, col: 25, gap: 1 },
  { row: 18, col: 35, gap: 2 },
  { row: 18, col: 46, gap: 4 },

  { row: 19, col: 7, gap: 5 },
  { row: 19, col: 15, gap: 2 },
  { row: 19, col: 25, gap: 1 },
  { row: 19, col: 36, gap: 2 },
  { row: 19, col: 46, gap: 4 },

  { row: 20, col: 10, gap: 8 },
  { row: 20, col: 14, gap: 2 },
  { row: 20, col: 25, gap: 1 },
  { row: 20, col: 37, gap: 2 },

  { row: 21, col: 15, gap: 13 },
  { row: 21, col: 25, gap: 1 },

  { row: 22, col: 5, gap: 3 },
  { row: 22, col: 37, gap: 25 },

  { row: 23, col: 5, gap: 3 },
  { row: 23, col: 18, gap: 6 },
  { row: 23, col: 27, gap: 5 },
  { row: 23, col: 37, gap: 6 },
];

@Injectable({
  providedIn: 'root',
})
export class VruService {
  constructor(private _api: ApiService) {}

  getZalSeats(): Observable<ZalSeatWithGap[]> {
    return this._api.getZalSeats().pipe(
      take(1),
      map((seats) => [
        ...seats.map((seat) => ({ ...seat, gap: this._getGap(seat) })),
      ])
    );
  }

  getZalFractions(): Observable<ZalFraction[]> {
    return this._api.getZalFractions();
  }

  private _getGap(zalSeat: ZalSeat) {
    return (
      gaps.find((i) => i.col === zalSeat.col && i.row === zalSeat.row)?.gap || 0
    );
  }
}

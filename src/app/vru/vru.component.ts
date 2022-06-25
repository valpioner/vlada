import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { ZalSeatWithGap } from '../shared/models/open-data/zal-seat';
import { VruService } from './vru.service';

@Component({
  selector: 'vru',
  templateUrl: './vru.component.html',
  styleUrls: ['./vru.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VruComponent implements OnInit {
  zalSeatsWithGaps: ZalSeatWithGap[] = [];

  constructor(private _cd: ChangeDetectorRef, private _vruService: VruService) {
    _vruService.getZalSeats().subscribe((seats) => {
      this.zalSeatsWithGaps = seats;
      this._cd.markForCheck();

      // console.log(this.zalSeatsWithGaps);
    });
  }

  ngOnInit(): void {}

  getRowSeats(rowIndex: number) {
    return this.zalSeatsWithGaps.filter((seat) => seat.row === rowIndex + 2);
  }

  counter(i: number) {
    return new Array(i);
  }
}

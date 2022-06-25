import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ZalSeatWithGap } from 'src/app/shared/models/open-data/zal-seat';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent implements OnInit {
  @Input() seats?: ZalSeatWithGap[];

  constructor() {}

  ngOnInit(): void {}

  getMarginByGap(seat: ZalSeatWithGap) {
    if (seat.gap) {
      return seat.gap * 20;
    }
    return 0;
  }
}

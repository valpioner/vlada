import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

export interface Seat {
  person?: { name: string };
  gap?: number;
}

export interface Row {
  seats?: Seat[];
}

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent implements OnInit {
  @Input() seats!: Seat[] | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('[row] seats: ', this.seats);
  }

  getMarginByGap(seat: Seat) {
    if (seat.gap) {
      return seat.gap * 20;
    }
    return 0;
  }
}

import {
  FlexibleConnectedPositionStrategyOrigin,
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import vru from '../../assets/vru.json';
import { Row } from './row/row.component';

const vruSeats = [
  {
    seats: [
      { gap: 18 },
      { person: { name: 'name' }, gap: 1 },
      { person: { name: 'Стефанчук Руслан Олексійович' }, gap: 1 },
      { person: { name: 'name' }, gap: 1 },
      { gap: 1 },
    ],
  },
  {},
  {
    seats: [{ gap: 22 }],
  },
  {},
  {
    seats: [
      { gap: 10 },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 9 },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 6 },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 5 },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 4 },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 2 },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 2 },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 2 },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 4, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 4, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 2 },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
    ],
  },
  {},
  {
    seats: [
      { person: { name: 'name' } },
      { gap: 5, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 5, person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 3, person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { person: { name: 'name' } },
      { gap: 4, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 4, person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 5, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 4, person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 8, person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 2, person: { name: 'name' } },
      { person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 13, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 1, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 4, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 24, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
    ],
  },
  {
    seats: [
      { gap: 4, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 5, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 5, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { gap: 6, person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
      { person: { name: 'name' } },
    ],
  },
];

@Component({
  selector: 'vru',
  templateUrl: './vru.component.html',
  styleUrls: ['./vru.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VruComponent implements OnInit, AfterViewInit {
  uiRows = new Array(22);
  uiSeats = new Array(45);

  seatDetails = '';

  rows: Row[] = vruSeats;

  // seats = [
  //   // [18, 20, 22, 24, 26],
  //   // [],
  //   // [22],
  //   // [],
  //   // [
  //   //   [10, 14],
  //   //   [18, 21],
  //   //   [23, 26],
  //   //   [30, 34],
  //   // ],
  //   // [
  //   //   [9, 13],
  //   //   [17, 21],
  //   //   [23, 27],
  //   //   [31, 35],
  //   // ],
  //   // [
  //   //   [6, 11],
  //   //   [15, 21],
  //   //   [23, 29],
  //   //   [33, 38],
  //   // ],
  //   // [
  //   //   [5, 10],
  //   //   [14, 21],
  //   //   [23, 30],
  //   //   [34, 39],
  //   // ],
  //   // [
  //   //   [4, 9],
  //   //   [13, 21],
  //   //   [23, 31],
  //   //   [35, 40],
  //   // ],
  //   // [[2, 7], [11, 15], [18, 21], [23, 26], [29, 33], [37, 42], 44],
  //   // [[2, 6], [9, 14], [17, 21], [23, 27], [30, 35], [38, 42], 44],
  //   // [[2, 4], [9, 14], [17, 21], [23, 27], [30, 35], [40, 42], 44],
  //   // [[2, 3], [7, 13], [16, 21], [23, 28], [31, 37], [41, 42], 44],
  //   // [],
  //   // [0, [6, 12], [15, 21], [23, 29], [32, 38], 44],
  //   // [0, [4, 11], [14, 21], [23, 30], [33, 40], 44],
  //   // [0, [5, 11], [14, 21], [23, 30], [33, 39], 44],
  //   // [[5, 10], [13, 21], [23, 31], [34, 39], 44],
  //   // [
  //   //   [8, 9],
  //   //   [12, 21],
  //   //   [23, 32],
  //   //   [35, 36],
  //   // ],
  //   // [
  //   //   [13, 21],
  //   //   [23, 31],
  //   // ],
  //   // [
  //   //   [4, 10],
  //   //   [35, 41],
  //   // ],
  //   // [
  //   //   [4, 10],
  //   //   [16, 19],
  //   //   [25, 28],
  //   //   [35, 41],
  //   // ],
  // ];

  overlayRef!: OverlayRef;

  @ViewChild('overlayTemplate') overlayTemplate!: CdkPortal;

  // @ViewChildren('rows') private rowss!: ElementRef;

  // @ViewChildren('rows') private rows!: QueryList<ElementRef<HTMLElement>>;
  // @ViewChildren('row', {read: ElementRef}) private row!: QueryList<ElementRef>;

  constructor(private _overlay: Overlay) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log(this.row)
    // console.log(this.rows[0])
  }

  // isSeat(rowIndex: number, seatIndex: number) {
  //   const rowSeats = this.seats[rowIndex];

  //   return rowSeats?.some((value: number | Array<number>) => {
  //     if (typeof value === 'number') {
  //       return seatIndex === value;
  //     }

  //     return seatIndex >= value[0] && seatIndex <= value[1];
  //   });
  // }

  onSeatMouseEnter(rowIndex: number, seatIndex: number) {
    const res = vru.slice(0).reduce((acc, curr, i, arr) => {
      let deputy = curr.members?.find(
        (i) =>
          rowIndex === +i.seat.split(',')[0] &&
          seatIndex === +i.seat.split(',')[1]
      );
      if (deputy) arr.splice(1);
      return (acc = {
        name: deputy?.name,
        unionType: deputy && curr.type,
        unionName: deputy && curr.name,
      });
    }, {});

    this.seatDetails = JSON.stringify(res);

    // this.openOverlay();

    // console.log(res)
  }

  // openOverlay(e: MouseEvent) {
  //   console.log(e);
  //   const positionStrategy = this._overlay
  //     .position()
  //     .flexibleConnectedTo(this.rows);
  //   const overlayConfig = new OverlayConfig({
  //     positionStrategy,
  //   });
  //   // overlayConfig.hasBackdrop = true;
  //   this.overlayRef = this._overlay.create(overlayConfig);
  //   // this.overlayRef.backdropClick().subscribe(() => {
  //   //   this.overlayRef.dispose();
  //   // });
  //   this.overlayRef.attach(this.overlayTemplate);

  //   // const overlayRef = overlay.create();
  //   // const userProfilePortal = new ComponentPortal(UserProfile);
  //   // overlayRef.attach(userProfilePortal);
  // }

  onSeatMouseLeave(rowIndex: number, seatIndex: number) {
    this.seatDetails = '';
  }
}

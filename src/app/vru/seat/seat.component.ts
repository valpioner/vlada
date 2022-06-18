import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Seat } from '../row/row.component';

@Component({
  selector: 'seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatComponent implements OnInit {
  overlayRef: OverlayRef | null = null;

  @Input()
  seat?: Seat;

  @ViewChild('overlayTemplate') overlayTemplate!: CdkPortal;

  constructor(private _overlay: Overlay, private _elementRef: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('mouseover') openOverlay() {
    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this._elementRef)
      .withPositions([
        {
          originX: 'end',
          originY: 'center',
          overlayX: 'start',
          overlayY: 'center',
          offsetX: 10,
          panelClass: 'right',
        },
        {
          originX: 'start',
          originY: 'center',
          overlayX: 'end',
          overlayY: 'center',
          offsetX: -10,
          panelClass: 'left',
        },
      ]);

    const overlayConfig = new OverlayConfig({
      panelClass: 'overlay-panel',
      positionStrategy,
      // width: 200,
    });
    // overlayConfig.hasBackdrop = true;
    this.overlayRef = this._overlay.create(overlayConfig);
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef?.dispose();
    });
    this.overlayRef.attach(this.overlayTemplate);
  }

  @HostListener('mouseleave') closeOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef.detach();
      this.overlayRef = null;
    }
  }
}

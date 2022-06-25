import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ZalSeat,
  ZalSeatWithGap,
} from 'src/app/shared/models/open-data/zal-seat';

@Component({
  selector: 'seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // host: {
  //   '[class.sluga-narodu]': 'someField',
  // },
})
export class SeatComponent implements OnInit {
  overlayRef: OverlayRef | null = null;

  @Input()
  seat?: ZalSeatWithGap;

  @ViewChild('overlayTemplate') overlayTemplate!: CdkPortal;

  @HostBinding('class') get class() {
    if (
      !this.seat?.id_fr &&
      !this.seat?.id_mp &&
      this.seat?.title === 'Вільне місце'
    ) {
      return 'vilne';
    }

    switch (this.seat?.id_fr) {
      case 0:
        return 'poza-fr';
        break;
      case 1:
        return 'fr-sluga-narodu';
        break;
      case 2:
        return 'fr-za-zhyttya';
        break;
      case 3:
        return 'fr-batkivshchyna';
        break;
      case 4:
        return 'fr-euro-solidarnist';
        break;
      case 5:
        return 'fr-holos';
        break;
      case 7:
        return 'fr-dovira';
        break;
      case 8:
        return 'fr-za-maybutne';
        break;

      default:
        return '';
        break;
    }
  }

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
    });
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

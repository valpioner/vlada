import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VruComponent } from './vru.component';
import { VruRoutingModule } from './vru-routing.module';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { RowComponent } from './row/row.component';
import { SeatComponent } from './seat/seat.component';

@NgModule({
  declarations: [
    VruComponent,
    RowComponent,
    SeatComponent
  ],
  imports: [
    CommonModule,
    VruRoutingModule,
    OverlayModule,
    PortalModule
  ]
})
export class VruModule { }

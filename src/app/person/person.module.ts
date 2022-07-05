import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [PersonComponent],
  imports: [CommonModule, MatTabsModule, PersonRoutingModule],
})
export class PersonModule {}

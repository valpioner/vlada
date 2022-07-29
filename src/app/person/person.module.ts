import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [PersonComponent, NewsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    PersonRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class PersonModule {}

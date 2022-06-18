import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VruComponent } from './vru.component';

const routes: Routes = [
  {
    path: '',
    component: VruComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VruRoutingModule { }

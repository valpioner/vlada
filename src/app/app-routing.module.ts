import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VruComponent } from './vru/vru.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  //   // canActivate: [AuthGuard]
  //   // redirectTo: '/events',
  //   // pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: '/vru',
    pathMatch: 'full'
  },
  {
    path: 'vru',
    loadChildren: () => import('./vru/vru.module').then(m => m.VruModule)
    // component: VruComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [Role.Admin] }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

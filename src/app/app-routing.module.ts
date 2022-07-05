import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    pathMatch: 'full',
  },
  {
    path: 'person',
    loadChildren: () =>
      import('./person/person.module').then((m) => m.PersonModule),
    // component: VruComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [Role.Admin] }
  },
  {
    path: 'vru',
    loadChildren: () => import('./vru/vru.module').then((m) => m.VruModule),
    // component: VruComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [Role.Admin] }
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

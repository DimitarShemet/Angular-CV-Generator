import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulePath } from './shared/enums/routing-path.enums';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: ModulePath.Auth,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: ModulePath.Core,
    loadChildren: () =>
      import('./modules/core/core.module').then((m) => m.CoreModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: ModulePath.Core,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

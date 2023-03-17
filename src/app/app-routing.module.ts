import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AUTH_PAGE } from './shared/constants/routing-path.const';
import { ModulePath } from './shared/enums/routing-path.enums';

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

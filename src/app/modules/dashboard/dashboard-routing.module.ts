import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: PagePath.Dashboard,
    component: DashboardPageComponent,
  },
  {
    path: '**',
    redirectTo: PagePath.Dashboard,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TranslateModule],
})
export class DashboardRoutingModule {}

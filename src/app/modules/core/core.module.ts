import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthInterceptor } from 'src/app/shared/interceptors/auth.interceptor';
import { AuthApiService } from 'src/app/shared/services/api/auth.api.service';

import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';

@NgModule({
  declarations: [
    SideBarComponent,
    NavComponent,
    BreadCrumbsComponent,
    HeaderComponent,
    CorePageComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, TranslateModule],
})
export class CoreModule {}

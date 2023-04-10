import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthInterceptor } from 'src/app/shared/interceptors/auth.interceptor';
import { AuthApiService } from 'src/app/shared/services/api/auth.api.service';

import { BreadcrumbComponents } from './components/bread-crumbs/bread-crumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    SideBarComponent,
    NavComponent,
    BreadcrumbComponents,
    HeaderComponent,
    CorePageComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    TranslateModule,
    NzMenuModule,
    NzIconModule,
    NzToolTipModule,
    NzDividerModule,
  ],
})
export class CoreModule {}

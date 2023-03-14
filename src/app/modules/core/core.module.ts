import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './components/core/core.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavComponent } from './components/nav/nav.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    CoreComponent,
    SideBarComponent,
    NavComponent,
    BreadCrumbsComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class CoreModule {}

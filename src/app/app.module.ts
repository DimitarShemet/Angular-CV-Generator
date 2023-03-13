import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseControl } from './shared/classes/base-control.class';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { InputComponent } from './shared/components/controls/input/input.component';

import { AuthModule } from './auth/auth.module';
import { DatepickerComponent } from './shared/components/controls/datepicker/datepicker.component';
import { SelectComponent } from './shared/components/controls/select/select.component';
import { TextareaComponent } from './shared/components/controls/textarea/textarea.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, BaseControl],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    AuthModule,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    DatepickerComponent,
  ],
})
export class AppModule {}

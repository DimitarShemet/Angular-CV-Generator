import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputComponent } from 'src/app/shared/components/controls/input/input.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AuthFormComponent, AuthPageComponent],
  imports: [
    CommonModule,
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    NzCheckboxModule,
    NzButtonModule,
    AuthRoutingModule,
    TranslateModule,
    NzSpinModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true,
      defaultLanguage: 'en',
    }),
  ],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { InputComponent } from '../shared/components/controls/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    NzCheckboxModule,
    NzButtonModule,
  ],
  exports: [LoginComponent],
})
export class AuthModule {}

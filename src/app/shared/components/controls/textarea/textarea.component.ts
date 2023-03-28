import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { BaseControl } from '../../../classes/base-control.class';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { GetErrorMessagePipe } from 'src/app/shared/pipes/get-error-message.pipe';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    GetErrorMessagePipe,
  ],
})
export class TextareaComponent extends BaseControl {
  constructor(NgControl: NgControl) {
    super(NgControl);
  }
}

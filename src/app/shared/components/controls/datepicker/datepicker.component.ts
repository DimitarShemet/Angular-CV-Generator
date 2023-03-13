import { Component } from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { BaseControl } from '../../../classes/base-control.class';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzDatePickerModule,
  ],
})
export class DatepickerComponent extends BaseControl {
  constructor(ngControl: NgControl) {
    super(ngControl);
  }
}

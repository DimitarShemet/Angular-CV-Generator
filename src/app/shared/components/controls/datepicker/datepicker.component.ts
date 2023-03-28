import { Component } from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { BaseControl } from '../../../classes/base-control.class';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { GetErrorMessagePipe } from 'src/app/shared/pipes/get-error-message.pipe';

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
    GetErrorMessagePipe,
  ],
})
export class DatepickerComponent extends BaseControl {
  constructor(ngControl: NgControl, private i18n: NzI18nService) {
    super(ngControl);
  }
}

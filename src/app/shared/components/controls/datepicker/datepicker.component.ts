import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { GetErrorMessagePipe } from 'src/app/shared/pipes/get-error-message.pipe';
import { BaseControl } from '../../../classes/base-control.class';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent extends BaseControl {
  constructor(ngControl: NgControl, private i18n: NzI18nService) {
    super(ngControl);
  }
}

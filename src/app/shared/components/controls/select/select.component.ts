import { Component, Input } from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { BaseControl } from '../../../classes/base-control.class';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { GetErrorMessagePipe } from 'src/app/shared/pipes/get-error-message.pipe';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    NzIconModule,
    GetErrorMessagePipe,
  ],
})
export class SelectComponent extends BaseControl {
  @Input() listOfOption: any = [
    { label: 1, value: 1 },
    { label: 1, value: 1 },
    { label: '', value: '' },
  ];
  constructor(ngControl: NgControl) {
    super(ngControl);
  }
}

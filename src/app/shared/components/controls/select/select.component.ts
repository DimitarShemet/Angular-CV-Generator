import { Component, Input } from '@angular/core';
import {
  FormArray,
  FormControl,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  @Input() listOfOption: any;

  constructor(ngControl: NgControl) {
    super(ngControl);
  }
}

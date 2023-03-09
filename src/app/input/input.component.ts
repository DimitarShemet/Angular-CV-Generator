import { Component, forwardRef } from '@angular/core';
import { NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControl } from '../shared/base-control.class';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends BaseControl {
  constructor(ngControl: NgControl) {
    super(ngControl);
  }
}

import { Component, forwardRef } from '@angular/core';
import { NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseAccessorDirective } from '../shared/base-accessor.directive';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent extends BaseAccessorDirective<string> {
  // constructor(control: NgControl) {
  //   super(control);
  // }
  ngOnInit(): void {
    console.log(this.type);
  }
}

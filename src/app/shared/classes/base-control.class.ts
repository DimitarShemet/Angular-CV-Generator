import { Directive, Input } from '@angular/core';

import {
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup,
  NgControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[appBaseAccessor]',
  standalone: true,
})
export class BaseControl implements ControlValueAccessor {
  @Input() multiselection? = true;
  @Input() type?: string = 'text';
  @Input() placeholder?: string;
  @Input() label: string;
  @Input() icon?: string;
  @Input() errors?: { [key: string]: string } = {
    required: 'Please, specify the field',
  };

  formControl: any = new FormControl('');
  error$: string;
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor(private ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(value: any) {
    this.formControl.setValue(value);
  }
  registerOnChange(fn: Function) {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  ngOnInit() {
    this.formControl.valueChanges.subscribe((val: any) => {
      this.onChange(val);
    });

    this.formControl.setValidators(this.ngControl.control?.validator || null);
  }
}

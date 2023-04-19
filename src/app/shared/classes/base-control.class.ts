import { Directive, Input } from '@angular/core';

import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

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

  formControl: any = new FormControl();

  onChange: Function = () => {};
  onTouch: Function = () => {};

  constructor(protected ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(value: object) {
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
    this.formControl.valueChanges.subscribe((val: object) => {
      this.onChange(val);
    });

    this.formControl.setValidators(this.ngControl.control.validator || null);
  }
}

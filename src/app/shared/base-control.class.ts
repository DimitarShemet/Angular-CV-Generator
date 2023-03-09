import { Directive, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NgControl,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[appBaseAccessor]',
})
export class BaseControl implements ControlValueAccessor, Validator {
  @Input() type: string;
  @Input() placeholder?: string;

  formControl = new FormControl('');

  private currValue: string;
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor(private ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }
  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control);
    return null; // TODO
  }

  writeValue(value: string) {
    this.formControl.setValue(value);
  }
  registerOnChange(fn: Function) {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const val = input.value;
    console.log(val);
    this.onChange(val);
  }
  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }
  ngOnInit() {
    this.formControl.valueChanges.subscribe((val) => this.onChange(val));
    this.formControl.setValidators(this.ngControl.control?.validator || null);
  }
}

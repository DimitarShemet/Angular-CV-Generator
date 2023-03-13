import { Directive, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appBaseAccessor]',
})
export class BaseControl implements ControlValueAccessor {
  @Input() type?: string = 'text';
  @Input() placeholder: string;
  @Input() label: string;
  @Input() icon?: string;
  @Input() errors?: { [key: string]: string } = {
    required: 'Please, specify the field',
  };

  formControl = new FormControl('');
  error$: string;
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor(private ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
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

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  ngOnInit() {
    this.formControl.valueChanges.subscribe((val) => {
      this.onChange(val);
    });

    this.formControl.setValidators(this.ngControl.control?.validator || null);
    this.ngControl.statusChanges.subscribe((state) => {
      if (state === 'INVALID') {
        this.getErrorMessage(this.ngControl.control.errors);
      } else {
        this.error$ = '';
      }
    });
  }

  getErrorMessage(errors: ValidationErrors | null) {
    if (errors) {
      const errorKey = Object.keys(errors)[0];
      this.error$ = this.errors?.[errorKey];
    }
  }
}
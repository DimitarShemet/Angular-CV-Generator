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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseAccessorDirective),
      multi: true,
    },
  ],
})
export class BaseAccessorDirective<T>
  implements ControlValueAccessor, Validator
{
  @Input() type: string;
  @Input() placeholder?: string;
  // @Input() value?: string;
  get value(): T {
    return this.currValue;
  }
  set value(val: T) {
    this.currValue = val;
  }

  defvalue = 'dima';
  // control = new FormControl('', Validators.required);
  private currValue: T;
  private changed = new Array<(value: T) => void>();
  private touched = new Array<() => void>();

  // onChange = (value: T): void => {};
  // onTouched = (value: T): void => {};

  // constructor(public control: NgControl) {}
  validate(control: AbstractControl): ValidationErrors | null {
    return null; // TODO
  }

  writeValue(value: T) {
    this.currValue = value;
  }
  registerOnChange(fn: (value: T) => void): void {
    this.changed.push(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.touched.push(fn);
  }

  // onInput(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   const value = input.value;
  //   this.onChange(value);
  // }
  // ngOnInit() {
  //   console
  //     .log
  //     // this.control.valueChanges.subscribe((value) => {
  //     //   console.log(value);
  //     // })
  //     ();
  // }
  // геттер , сеттер на value, геттер возвращает значение currValue, а сеттер будет сетить значение в currValue
}

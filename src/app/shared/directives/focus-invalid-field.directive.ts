import {
  Directive,
  HostListener,
  ElementRef,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, NgControl } from '@angular/forms';

@Directive({
  selector: '[focusInvalidField]',
  standalone: true,
})
export class FormDirective {
  @ContentChildren(NgControl) formControls: QueryList<NgControl>;

  @HostListener('submit')
  check(formControls?: QueryList<NgControl>) {
    const controls = formControls
      ? formControls.toArray()
      : this.formControls.toArray();

    for (let field of controls) {
      if (field.invalid) {
        (field.valueAccessor as any)._elementRef.nativeElement.focus();
        break;
      }
    }
  }
}

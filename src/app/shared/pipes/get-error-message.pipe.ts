import { Pipe, PipeTransform } from '@angular/core';
import { ERRORS } from '../constants/error-messages.consts';
import { ErrorsMessage } from '../interfaces/errors-message.interface';
@Pipe({
  name: 'getErrorMessage',
  standalone: true,
})
export class GetErrorMessagePipe implements PipeTransform {
  transform(value: ErrorsMessage): string | null {
    console.log(value);
    if (value) {
      const errorKey = Object.keys(value)[0];
      if (errorKey in ERRORS) {
        return ERRORS[errorKey];
      } else return null;
    } else {
      return null;
    }
  }
}

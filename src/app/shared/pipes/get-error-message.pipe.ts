import { Pipe, PipeTransform } from '@angular/core';
import { VALIDATION_ERRORS } from '../constants/error-messages.consts';
import { IErrorsMessage } from '../interfaces/errors-message.interface';
@Pipe({
  name: 'getErrorMessage',
  standalone: true,
})
export class GetErrorMessagePipe implements PipeTransform {
  transform(value: IErrorsMessage): string | null {
    if (value) {
      const errorKey = Object.keys(value)[0];
      if (errorKey in VALIDATION_ERRORS) {
        return VALIDATION_ERRORS[errorKey];
      }
    }
    return null;
  }
}

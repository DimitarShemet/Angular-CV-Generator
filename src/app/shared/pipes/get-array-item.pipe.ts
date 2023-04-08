import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getArrayItem',
  standalone: true,
})
export class GetArrayItemPipe implements PipeTransform {
  transform(
    value: Array<number>,
    argument: [
      { label: string; value: number },
      { label: string; value: number },
      { label: string; value: number }
    ]
  ): string {
    let result = '';
    for (let i = 0; i < value.length; i++) {
      for (let a = 0; a < argument.length; a++) {
        if (value[i] === argument[a].value) {
          if (i === value.length - 1) {
            result += argument[a].label;
          } else {
            result += argument[a].label + ', ';
          }
        } else {
          continue;
        }
      }
    }
    return result;
  }
}

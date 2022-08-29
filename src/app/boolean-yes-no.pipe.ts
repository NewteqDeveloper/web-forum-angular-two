import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanYesNo'
})
export class BooleanYesNoPipe implements PipeTransform {

  transform(value: boolean, customArg: boolean, args?: string[]): string {
    let append = ''
    if (args) {
      append += args[0];
    }

    if (customArg) {
      return value ? `Yes ${append}` : `No ${append}`
    }

    return `${value.toString()} ${append}`;
  }

}

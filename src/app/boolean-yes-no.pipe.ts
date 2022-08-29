import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanYesNo'
})
export class BooleanYesNoPipe implements PipeTransform {

  transform(value: boolean, humanize: boolean): string {
    if (humanize) {
      return value ? `Yes` : `No`
    }

    return `${value.toString()}`;
  }

}

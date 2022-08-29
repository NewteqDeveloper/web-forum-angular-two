import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanYesNo'
})
export class BooleanYesNoPipe implements PipeTransform {

  transform(value: boolean, humanize?: boolean, args?: string, argsArray?: string[]): string {
    console.log('running pipe');
    if (humanize) {
      return value ? `Yes` : `No`
    }

    return `${value.toString()}`;
  }

}

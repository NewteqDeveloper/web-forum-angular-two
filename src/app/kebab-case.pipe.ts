import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase'
})
export class KebabCasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const charsInString = Array.from(value);
    let newValue = '';

    for(let char of charsInString) {
      if (char === char.toUpperCase()) {
        newValue += `-${char.toLowerCase()}`;
      } else {
        newValue += char.toLowerCase();
      }
    }

    return newValue;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celcius'
})

export class CelciusPipe implements PipeTransform {
  transform(value: number | undefined): number | undefined {
    if (value === undefined) {
      return value;
    }
    let n = value - 273.15;
    return parseFloat(n.toFixed(2));
  }
}

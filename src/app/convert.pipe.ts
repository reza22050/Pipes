import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnits: string): any {
    //console.log(value);
    //console.log(args);

    if (!targetUnits)
      return '';

    switch (targetUnits) {
      case 'km':
        return value * 1.6;
        break;

      case 'm':
        return value * 1.6 * 1000;
        break;

      case 'cm':
        return value * 1.6 * 1000 * 1000;
        break;

      default:
        throw new Error("Not supported unit: " + targetUnits);
    }

  }

}

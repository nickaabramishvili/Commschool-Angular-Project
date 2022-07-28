import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTransform',
})
export class CustomTransformPipe implements PipeTransform {
  transform(value: string) {
    return value
      .split(' ')
      .map((el, i) => (i % 2 == 0 ? el.toLowerCase() : el.toUpperCase()))
      .join(' ');
  }
}

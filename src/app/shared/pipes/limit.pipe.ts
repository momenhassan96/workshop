import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {
  newString: string;
  transform(value: string, limit) {
        return value.length > limit ?  value.substring(0,limit) + '...' : value;
  }

}

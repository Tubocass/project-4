import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'avg',
    pure: true
  })
  export class avgPipe implements PipeTransform {
    transform(sum: number, count:number): number {
      return count>0? sum/count : 0;
    }
  }
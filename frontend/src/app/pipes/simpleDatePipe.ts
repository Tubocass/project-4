import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'simpleDatePipe'})
export class SimpleDatePipe implements PipeTransform {
    transform(value: object): String{
        return `${value['year']}-${value['month']}-${value['day']}`
    }
}
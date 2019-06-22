import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'simpleDatePipe',
    pure: true
})
export class SimpleDatePipe implements PipeTransform {
    transform(value: object): String{
        return `${value['year']}-${value['month']}-${value['day']}`
    }
}
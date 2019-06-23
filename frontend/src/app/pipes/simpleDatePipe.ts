import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'simpleDatePipe',
    pure: true
})
export class SimpleDatePipe implements PipeTransform {
    transform(value: object): String{
        let formatted = `${value["year"]}-`+
            `${value["month"]>9? value["month"]: '0'+value["month"]}-`+
            `${value["day"]>9? value["day"]: '0'+value["day"]}`;
        return formatted;
    }
}
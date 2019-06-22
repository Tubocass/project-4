export class SimpleDate{
    year:number;
    month:number;
    day:number

    constructor(y:number, m:number, d:number){
        this.year = y;
        this.month = m;
        this.day = d;
    }
    static parse(dateString:String): SimpleDate{
        let dateArr = dateString.split('-').map(Number);
        return new SimpleDate(dateArr[0], dateArr[1], dateArr[2]);
    }
    printDate() : String{
        let formatted = `${this.year}-`+
            `${this.month>9? this.month: '0'+this.month}-`+
            `${this.day>9? this.day: '0'+this.day}`;
        // console.log(formatted)
        return formatted;
    }
}
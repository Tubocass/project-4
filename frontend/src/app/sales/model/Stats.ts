export class Stats {
    min: number;
    max: number;
    average: number;
    count: number;
    sum: number;

    constructor(min: number, max: number, count: number, sum: number) {
        this.min = min;
        this.max = max;
        this.count = count;
        this.sum = sum;
        this.average = sum > 0 ? sum / count : 0;
    }

    getAverage(): number {
        return this.sum > 0 ? this.sum / this.count : 0;
    }
}

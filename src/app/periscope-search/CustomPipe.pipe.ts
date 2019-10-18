import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'thousandSuff'
})
export class CustomPipePipe implements PipeTransform {

    // transform(input: any, args?: any): any {
    //     var exp, rounded,
    //         suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

    //     if (Number.isNaN(input)) {
    //         return null;
    //     }

    //     if (input < 1000) {
    //         return input;
    //     }

    //     exp = Math.floor(Math.log(input) / Math.log(1000));

    //     return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];


    // }

    transform(number: number, args?: any): any {
        if (isNaN(number)) return null; // will only work value is a number
        if (number === null) return null;
        if (number === 0) return null;
        let abs = Math.abs(number);
        const rounder = Math.pow(10, 1);
        const isNegative = number < 0; // will also work for Negetive numbers
        let key = '';

        const powers = [
            {key: 'Q', value: Math.pow(10, 15)},
            {key: 'T', value: Math.pow(10, 12)},
            {key: 'B', value: Math.pow(10, 9)},
            {key: 'M', value: Math.pow(10, 6)},
            {key: 'K', value: 1000}
        ];

        for (let i = 0; i < powers.length; i++) {
            let reduced = abs / powers[i].value;
            reduced = Math.round(reduced * rounder) / rounder;
            if (reduced >= 1) {
                abs = reduced;
                key = powers[i].key;
                break;
            }
        }
        return (isNegative ? '-' : '') + abs + key;
    }

}
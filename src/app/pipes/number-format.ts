import { Pipe } from '@angular/core';

@Pipe({
    name: 'numberFormat'
})
export class NumberFormat {

    transform(n) {
        var formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
        });
        return formatter.format(n);
        //return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }



}
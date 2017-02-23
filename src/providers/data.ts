import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  funds: any;
  accounts: any;

  constructor(public http: Http) {
    console.log('Hello Data Provider');
    this.funds = [
      { title: 'ทิสโก้ หุ้นระยะยาว (A)' },
      { title: 'ทิสโก้ หุ้นระยะยาว (B)' },
      { title: 'ทิสโก้ Mid/Small Cap หุ้นระยะยาว ' },
      { title: 'ทิสโก้ ดิวิเดนด์ ซีเล็ค หุ้นระยะยาว' },
      { title: 'ทิสโก้หุ้นระยะยาวปันผล' },
    ]

    this.accounts = [
      { name: '130-556-8871',bank:'ธนาคารทิสโก้' },
      { name: '067-852-8796',bank:'ธนาคารกสิกรไทย' },
    ]

  }

  filterFunds(searchTerm) {

    return this.funds.filter((fund) => {
      return fund.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}

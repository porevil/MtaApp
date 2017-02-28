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
  groupedFunds: any;
  /*
  fund1 = {
    groupfund: 'Long Term Equity Fund',
    funds: [
      { title: 'ทิสโก้ หุ้นระยะยาว', group: 'Long Term Equity Fund' },
      { title: 'ทิสโก้ Mid/Small Cap หุ้นระยะยาว ', group: 'Long Term Equity Fund' },
      { title: 'ทิสโก้ ดิวิเดนด์ ซีเล็ค หุ้นระยะยาว', group: 'Long Term Equity Fund' },
      { title: 'ทิสโก้หุ้นระยะยาวปันผล', group: 'Long Term Equity Fund' }
    ]
  };
  fund2 = {
    groupfund: 'Retirement Mutual Fund',
    funds: [
      { title: 'ทิสโก้ตราสารหนี้มั่นคงเพื่อการเลี้ยงชีพ', group: 'Retirement Mutual Fund' },
      { title: 'ทิสโก้ พลทรัพย์เพื่อการเลี้ยงชีพ', group: 'Retirement Mutual Fund' },
      { title: 'ทิสโก้ หุ้นทุนเพื่อการเลี้ยงชีพ ', group: 'Retirement Mutual Fund' },
      { title: 'ทิสโก้ ไฮ ดิวิเดนด์ หุ้นทุน เพื่อการเลี้ยงชีพ', group: 'Retirement Mutual Fund' },
      { title: 'ทิสโก้ MID/SMALL CAP อิควิตี้ เพื่อการเลี้ยงชีพ', group: 'Retirement Mutual Fund' }
    ]
  };
*/
  constructor(public http: Http) {
    console.log('Hello Data Provider');
    this.funds = [
      { title: 'ทิสโก้ หุ้นระยะยาว', group: 'Long Term Equity Fund' },
      { title: 'ทิสโก้ Mid/Small Cap หุ้นระยะยาว ', group: 'Long Term Equity Fund' },
      { title: 'ทิสโก้ ดิวิเดนด์ ซีเล็ค หุ้นระยะยาว', group: 'Long Term Equity Fund' },
      { title: 'ทิสโก้หุ้นระยะยาวปันผล', group: 'Long Term Equity Fund' },
      { title: 'ทิสโก้ตราสารหนี้มั่นคงเพื่อการเลี้ยงชีพ', group: 'Retirement Mutual Fund' },
      { title: 'ทิสโก้ พลทรัพย์เพื่อการเลี้ยงชีพ', group: 'Retirement Mutual Fund' },
      { title: 'ทิสโก้ หุ้นทุนเพื่อการเลี้ยงชีพ ', group: 'Retirement Mutual Fund' },
      { title: 'ทิสโก้ ไฮ ดิวิเดนด์ หุ้นทุน เพื่อการเลี้ยงชีพ', group: 'Retirement Mutual Fund' },
      { title: 'ทิสโก้ MID/SMALL CAP อิควิตี้ เพื่อการเลี้ยงชีพ', group: 'Retirement Mutual Fund' },
    ]

    //this.groupedFunds.push(this.fund1);

    console.log(' groupedFunds done ');
    this.accounts = [
      { name: '130-556-8871', bank: 'ธนาคารทิสโก้' },
      { name: '067-852-8796', bank: 'ธนาคารกสิกรไทย' },
    ]

  }
  /*
    groupFunds(funds) {
   
      let sortedFunds = funds;
      let currentLetter = false;
      let currentFunds = [];
      funds.forEach(snap => {
   
        currentFunds.push({
          activity: snap.title,
          place: snap.group,
        });
   
        console.log('title ' + snap.title)
        if (snap.group.charAt(0) != currentLetter) {
   
          currentLetter = snap.group.charAt(0);
          console.log('currentLetter ' + currentLetter)
          let newGroup = {
            group: currentLetter,
            funds: []
          };
   
          //currentFunds = newGroup.titles;
          console.log('group ' + newGroup.group)
   
          //this.groupedFunds.push(newGroup);
   
        }
        //currentFunds.push(snap);
      });
   
   
    }
  */
  filterFunds(searchTerm) {

    return this.funds.filter((fund) => {
      return fund.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}

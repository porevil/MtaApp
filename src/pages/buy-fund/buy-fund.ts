import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { BuyFundConfirmPage } from '../buy-fund-confirm/buy-fund-confirm';

/*
  Generated class for the BuyFund page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buy-fund',
  templateUrl: 'buy-fund.html'
})
export class BuyFundPage {

    searchTerm: string = '';
    funds: any;
    searchControl: FormControl;
    searching: any = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
    
    this.searchControl = new FormControl();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyFundPage');
    this.setFilteredItems();
 
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
            this.searching = false;
            this.setFilteredItems();
 
        });

  }

    onSearchInput(){
        this.searching = true;
    }

   setFilteredItems() {
 
        this.funds = this.dataService.filterFunds(this.searchTerm);
 
    }

    fundselected(fundName){
      this.navCtrl.push(BuyFundConfirmPage,
      {fund_info:fundName});
    }

}

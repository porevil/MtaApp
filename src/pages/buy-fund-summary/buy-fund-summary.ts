import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyFundPage } from '../buy-fund/buy-fund';

/*
  Generated class for the BuyFundSummary page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buy-fund-summary',
  templateUrl: 'buy-fund-summary.html'
})
export class BuyFundSummaryPage {
  fundInfo: any;
  currentDate: any;
  price: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fundInfo = this.navParams.get("fund_info");
    this.price = this.navParams.get("price");
     this.currentDate = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyFundSummaryPage');
  }

  gotoBuyPage() {
    this.navCtrl.push(BuyFundPage)
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { BuyFundPage } from '../buy-fund/buy-fund';
import { NumberFormat } from '../../app/pipes/number-format';
import { FundData } from '../services/fund-data';
/*
  Generated class for the BuyFundSummary page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buy-fund-summary',
  templateUrl: 'buy-fund-summary.html',
  providers: [FundData]

})
export class BuyFundSummaryPage {
  fundInfo: any;
  currentDate: any;
  price: any;
  nav: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fundData: FundData, private loadingCtrl: LoadingController) {
    this.fundInfo = this.navParams.get("fund_info");
    this.price = this.navParams.get("price");
    this.nav = fundData.getFundNav();

    console.log('getFundNav : ' + this.nav);

    this.currentDate = new Date().toISOString();
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Processing',
      spinner: 'bubbles'
    });
    loading.present();
    console.log('ionViewDidLoad BuyFundSummaryPage');
    this.delay(2000).then(() => {
      // Do something after the sleep!
      loading.dismiss();
    })
    

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  gotoBuyPage() {
    this.navCtrl.push(BuyFundPage)
  }
}

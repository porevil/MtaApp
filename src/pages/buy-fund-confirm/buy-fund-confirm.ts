import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { BuyFundSummaryPage } from '../buy-fund-summary/buy-fund-summary';
import { Data } from '../../providers/data';
import { BuyFundPage } from '../buy-fund/buy-fund';
import { FundData } from '../services/fund-data';

/*
  Generated class for the BuyFundConfirm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buy-fund-confirm',
  templateUrl: 'buy-fund-confirm.html',
  providers: [FundData]   
})
export class BuyFundConfirmPage {
  fundInfo: any;
  currentDate: any;
  accounts: any;
  price: any;
  displayDate = new Date().toLocaleDateString();

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public dataService: Data, public fundData: FundData) {
    this.fundInfo = this.navParams.get("fund_info");
    this.currentDate = new Date().toISOString();
    console.log('fundInfo' + this.fundInfo + ' this.currentDate ' + this.currentDate);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyFundConfirmPage');
    this.accounts = this.dataService.accounts;
 
  }
  presentCancel() {
    console.log('presentCancel');
     this.navCtrl.pop
  }
  presentConfirm() {
    console.log('presentConfirm');
    let alert = this.alertCtrl.create({
      title: 'ยืนยัน',
      message: 'ต้องการยืนยันการซื้อกองทุน?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            console.log('Buy clicked');
            this.buyFundSummary();
          }
        }
      ]
    });
    console.log('presentConfirm present');
    alert.present();
  }

  buyFundSummary(){
    console.log('BuyFundSummaryPage');
    this.fundData.setFundInfo(this.fundInfo,10000);
    this.navCtrl.push(BuyFundSummaryPage,{ fund_info: this.fundInfo, price:this.price })
  }

}

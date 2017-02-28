import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyFundPage } from '../buy-fund/buy-fund';
/*
  Generated class for the Tab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

tab1Root: any = BuyFundPage;;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}

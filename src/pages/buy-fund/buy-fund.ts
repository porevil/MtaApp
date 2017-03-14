import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { BuyFundConfirmPage } from '../buy-fund-confirm/buy-fund-confirm';
import { NewsPage } from '../news/news';
import { ProfilePage } from '../profile/profile';

/*
  Generated class for the BuyFund page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buy-fund',
  templateUrl: 'buy-fund.html',
  animations: [

    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0' }),
        animate('2000ms ease-in-out')
      ])
    ]),

    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0)' }),
        animate('1000ms ease-in-out')
      ])
    ]),

    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({ transform: 'translate3d(0,2000px,0)', offset: 0 }),
          style({ transform: 'translate3d(0,-20px,0)', offset: 0.9 }),
          style({ transform: 'translate3d(0,0,0)', offset: 1 })
        ]))
      ])
    ]),

    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1000ms 2000ms ease-in')
      ])
    ])
  ]
})
export class BuyFundPage {

  searchTerm: string = '';
  funds: any;
  searchControl: FormControl;
  searching: any = false;
  tab1Root: any = BuyFundConfirmPage;
  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
    this.username = this.navParams.get("username");
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

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {

    this.funds = this.dataService.filterFunds(this.searchTerm);

  }

  fundselected(fundName) {
    this.navCtrl.push(BuyFundConfirmPage,
      { fund_info: fundName });
  }

  toNewsPage() {
    console.log('toNewsPage');
    this.navCtrl.push(NewsPage);
  }
  toProfilePage() {
    console.log('toProfilePage');
    this.navCtrl.push(ProfilePage);
  }

}

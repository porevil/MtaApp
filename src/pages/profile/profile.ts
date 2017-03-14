import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'; //import Storage เข้ามาใช้งาน

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) { }
  firstname: string;
  maxbuy: number;

  saveProfile() {
    console.log('saveProfile : '+this.firstname)
    this.storage.ready().then(() => { //ถ้า platform พร้อมใช้งาน
      // set a key/value
      //กำหนด และ set ค่า key เป็น phone และค่า value เป็น 085 4952624
      //เราสามารถเรียกใช้ค่านีไ􀀥 ด้จากทุกๆเพจ โดยอ้างช􀀟ือ key นั􀀟นก็คือ phone
      this.storage.set('firstname', this.firstname);
      this.storage.set('maxbuy', this.maxbuy);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

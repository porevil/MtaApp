import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { News } from '../services/news';
import { NewsService } from '../../providers/news-service';
import { Subscription } from 'rxjs/Subscription';
/*
  Generated class for the News page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  news: Array<News>;
  sub: Subscription;
  errorMessage: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService: NewsService, private loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  ionViewWillEnter() {
    this.getNews();
  }
  private getNews() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: 'dots'
    });
    loading.present();
    this.sub = this.newsService.getNews().subscribe(
      (res) => this.news = res,
      (error) => {
        this.errorMessage = <any>error,
          loading.dismiss() //close loading when error
      }, () => loading.dismiss()
    );
  }

  ionViewWillLeave() {
    this.sub.unsubscribe();
  }

}

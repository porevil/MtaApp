import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login-page/login-page';
import { BuyFundPage } from '../pages/buy-fund/buy-fund';
import { BuyFundConfirmPage } from '../pages/buy-fund-confirm/buy-fund-confirm';
import { BuyFundSummaryPage } from '../pages/buy-fund-summary/buy-fund-summary';
import { Data } from '../providers/data';
import { TabPage } from '../pages/tab/tab';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import {NumberFormat} from './pipes/number-format';
import {FundData} from '../pages/services/fund-data';
import { NewsPage } from '../pages/news/news';
import { News } from '../pages/services/news';
import { NewsService } from '../providers/news-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BuyFundPage,
    BuyFundConfirmPage,
    BuyFundSummaryPage,
    TabPage,
    ProgressBarComponent,
    NumberFormat,
    NewsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    BuyFundPage,
    BuyFundConfirmPage,
    BuyFundSummaryPage,
    TabPage,
    NewsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Data,FundData,News,NewsService]
})
export class AppModule {}

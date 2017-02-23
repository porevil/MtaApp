import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login-page/login-page';
import { BuyFundPage } from '../pages/buy-fund/buy-fund';
import { BuyFundConfirmPage } from '../pages/buy-fund-confirm/buy-fund-confirm';
import { BuyFundSummaryPage } from '../pages/buy-fund-summary/buy-fund-summary';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BuyFundPage,
    BuyFundConfirmPage,
    BuyFundSummaryPage
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
    BuyFundSummaryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Data]
})
export class AppModule {}

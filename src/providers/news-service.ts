import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { News } from '../pages/services/news';
/*
  Generated class for the NewsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsService {

  constructor(public http: Http) {
    console.log('Hello NewsService Provider');
  }

  getNews(): Observable<News[]> {

    return this.http.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=ab0d4aca4cea481e8157d31c68eb2b23')
      .map((res: Response) => <News[]>res.json().articles)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    return Observable.throw(error.json().errorMessage || 'Fail on Server');
  }
}

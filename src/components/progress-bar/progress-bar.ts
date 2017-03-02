import { Component, Input } from '@angular/core';

/*
  Generated class for the ProgressBar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  text: string;
  @Input('progress') progress;

  constructor() {
    console.log('Hello ProgressBar Component');
    this.text = 'Hello World';
  }

}

import { Component } from '@angular/core';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Angular 4 - Products';
  public headerColour: string;

  constructor() {
    this.headerColour = GLOBAL.headerColour;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: '../views/error.html',
})
export class ErrorComponent {
  public title: string;

  constructor() {
    this.title = 'This is not the page you are looking for';
  }

  ngOnInit() {
    console.log('Error component is loaded');
  }
}

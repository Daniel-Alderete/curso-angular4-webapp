import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'products-list',
  templateUrl: '../views/products-list.html',
})
export class PorductsListComponent {
  public title: string;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.title = 'Products List';
  }

  ngOnInit() {
    console.log('Products List component is loaded');
  }
}

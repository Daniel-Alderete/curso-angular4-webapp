import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'products-list',
  templateUrl: '../views/products-list.html',
  providers: [ProductService],
})
export class ProductsListComponent {
  public title: string;
  public products: Product[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    this.title = 'Products List';
    this.products = [];
  }

  ngOnInit() {
    console.log('Products List component is loaded');
    this._productService.getProducts().subscribe(
      (result) => {
        if (result.code != 200) {
          console.log(result);
        } else {
          this.products = result.data;
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}

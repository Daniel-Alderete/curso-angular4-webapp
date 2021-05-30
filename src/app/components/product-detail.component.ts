import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: '../views/product-detail.html',
  providers: [ProductService],
})
export class ProductDetail {
  public product: Product;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    this.product = new Product(0, '', '', 0, '');
  }

  ngOnInit() {
    console.log('Product Detail component is loaded');
    this.getProductDetail();
  }

  getProductDetail() {
    this._route.params.forEach((params: Params) => {
      let id: number = params['id'];

      this._productService.getProduct(id).subscribe(
        (result) => {
          if (result.code != 200) {
            console.log(result);
            this._router.navigate(['products']);
          } else {
            this.product = result.data;
          }
        },
        (error) => {
          console.log(<any>error);
        }
      );
    });
  }
}

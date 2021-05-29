import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-add',
  templateUrl: '../views/product-add.html',
  providers: [ProductService],
})
export class ProductAddComponent {
  public title: string;
  public product: Product;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Add a new Product';
    this.product = new Product(0, '', '', 0, '');
  }

  ngOnInit() {
    console.log('Products Add component is loaded');
  }

  onSubmit() {
    console.log(this.product);

    this._productService.addProduct(this.product).subscribe(
      (result) => {
        if (result.code != 201) {
          console.log(result);
        } else {
          this._router.navigate(['products']);
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}

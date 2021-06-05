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
  public productToDeleteId: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    this.title = 'Products List';
    this.products = [];
    this.productToDeleteId = -1;
  }

  ngOnInit() {
    console.log('Products List component is loaded');
    this.getProducts();
  }

  deleteAccept(id: number) {
    this.productToDeleteId = id;
  }

  deleteCancel() {
    this.productToDeleteId = -1;
  }

  getProducts() {
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

  onDeleteProduct(id: number) {
    this._productService.deleteProduct(id).subscribe(
      (result) => {
        if (result.code != 204) {
          console.log(result);
          alert('An error happened when deleting the product!');
        } else {
          this.getProducts();
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}

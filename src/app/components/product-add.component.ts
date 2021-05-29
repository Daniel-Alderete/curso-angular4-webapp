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
  public filesToUpload: Array<File>;
  //public resultUpload;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Add a new Product';
    this.product = new Product(0, '', '', 0, '');
    this.filesToUpload = new Array();
  }

  ngOnInit() {
    console.log('Products Add component is loaded');
  }

  onSubmit() {
    console.log(this.product);

    if (this.filesToUpload.length >= 1) {
      this._productService.doFileRequest([], this.filesToUpload).then(
        (result) => {
          console.log(result);

          this.product.image = result.filename;
          this.addProduct();
        },
        (error) => {
          console.log(<any>error);
        }
      );
    } else {
      this.addProduct();
    }
  }

  addProduct() {
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

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }
}

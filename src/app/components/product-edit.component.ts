import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-edit',
  templateUrl: '../views/product-add.html',
  providers: [ProductService],
})
export class ProductEditComponent {
  public title: string;
  public product: Product;
  public filesToUpload: Array<File>;
  public isEdit: boolean;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Edit Product';
    this.product = new Product(0, '', '', 0, '');
    this.filesToUpload = new Array();
    this.isEdit = true;
  }

  ngOnInit() {
    console.log('Products List component is loaded');
    this.getProductDetail();
  }

  onSubmit() {
    console.log(this.product);

    if (this.filesToUpload.length >= 1) {
      this._productService.doFileRequest([], this.filesToUpload).then(
        (result) => {
          console.log(result);

          this.product.image = result.filename;
          this.updateProduct();
        },
        (error) => {
          console.log(<any>error);
        }
      );
    } else {
      this.updateProduct();
    }
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
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

  updateProduct() {
    this._productService.editProduct(this.product).subscribe(
      (result) => {
        if (result.code != 200) {
          console.log(result);
        } else {
          this._router.navigate(['product', this.product.id]);
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}

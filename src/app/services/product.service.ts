import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsListResponse } from '../models/products-list.response';
import { Product } from '../models/product';
import { ProductAddResponse } from '../models/product-add.response';
import { UploadImageResponse } from '../models/upload-image.response';
import { ProductDetailResponse } from '../models/product-detail.response';

@Injectable()
export class ProductService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getProducts() {
    return this._http.get<ProductsListResponse>(this.url + 'products');
  }

  getProduct(id: number) {
    return this._http.get<ProductDetailResponse>(this.url + 'products/' + id);
  }

  addProduct(product: Product) {
    let json = JSON.stringify(product);
    let params = 'json=' + json;
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this._http.post<ProductAddResponse>(this.url + 'products', params, {
      headers: headers,
    });
  }

  doFileRequest(
    params_: Array<string>,
    files: Array<File>
  ): Promise<UploadImageResponse> {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var request = new XMLHttpRequest();

      for (var file of files) {
        formData.append('uploads[]', file, file.name);
      }

      request.onreadystatechange = function () {
        if (request.readyState == 4) {
          if (request.status == 200) {
            resolve(JSON.parse(request.response));
          } else {
            reject(request.response);
          }
        }
      };

      request.open('POST', this.url + 'upload-image', true);
      request.send(formData);
    });
  }
}

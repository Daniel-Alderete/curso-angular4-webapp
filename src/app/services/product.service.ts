import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsListResponse } from '../models/products-list.response';
import { Product } from '../models/product';
import { ProductAddResponse } from '../models/product-add.response';

@Injectable()
export class ProductService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getProducts() {
    return this._http.get<ProductsListResponse>(this.url + 'products');
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
}

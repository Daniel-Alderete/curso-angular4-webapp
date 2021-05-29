import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';
import { ProductsResponse } from '../models/products.response';

@Injectable()
export class ProductService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getProducts() {
    return this._http.get<ProductsResponse>(this.url + 'products');
  }
}

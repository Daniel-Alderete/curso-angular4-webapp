import { Product } from './product';

export class ProductDetailResponse {
  constructor(
    public status: string,
    public code: number,
    public data: Product
  ) {}
}

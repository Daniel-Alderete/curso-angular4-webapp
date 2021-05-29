import { Product } from './product';

export class ProductsResponse {
  constructor(
    public status: string,
    public code: number,
    public data: Product[]
  ) {}
}

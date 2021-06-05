import { Product } from './product';

export class ProductsListResponse {
  constructor(
    public status: string,
    public code: number,
    public data: Product[]
  ) {}
}

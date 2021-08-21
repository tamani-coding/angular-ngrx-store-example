import { Product } from '../entity/product';

export interface CartEntry {
  product: Product,
  count: number,
}

export const intialCartEntries: CartEntry[] = [];

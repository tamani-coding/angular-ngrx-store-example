import { Product } from './../entity/product';

export interface CartEntry {
  product: Product,
  count: number,
}

export interface CartState {
  entries: CartEntry[]
}

export const intialCartState: CartState = {
  entries: []
}

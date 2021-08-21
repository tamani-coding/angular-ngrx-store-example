import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartEntry } from './cart.state';

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: CartEntry[]) => {
    var count = 0;
    state.forEach(p => count +=  p.count);
    return count;
  }
);


export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: CartEntry[]) => {
    var totalPrice = 0;
    state.forEach(p => totalPrice +=  p.count * p.product.price);
    return totalPrice;
  }
)

export const selectCartEntries = createSelector(
  createFeatureSelector('cartEntries'),
  (state: CartEntry[]) => state
)

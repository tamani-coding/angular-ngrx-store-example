import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartEntry} from './cart.state';

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: CartEntry[]) => {
    var count = 0;
    state.forEach(p => count +=  p.count);
    return count;
  }
);

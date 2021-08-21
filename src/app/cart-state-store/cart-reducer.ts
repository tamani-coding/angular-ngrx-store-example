import { createReducer, on } from '@ngrx/store';
import { Product } from './../entity/product';
import { CartEntry, intialCartState } from './cart-state';
import { addProduct, clearCart, removeProduct } from './cart.actions';

function filter(productId: number) {
  return (e: CartEntry) => e.product.id = productId;
}

export const cartReducer = createReducer(
  intialCartState,
  on(clearCart, state => { state.entries = []; return state; } ),
  on(addProduct, (state, product) => {

    if (!state.entries.some(filter(product.id))) {
      state.entries.push( { product: product, count: 1} );
    } else {
      state.entries.filter(filter(product.id)).forEach(e => e.count++);
    }

    return state;
  }),
  on(removeProduct, (state, product) => {

    const found = state.entries.find(filter(product.id));
    if (found) {
      found.count--;
      if (found.count <= 0) {
        state.entries.splice(state.entries.indexOf(found))
      }
    }

    return state;
  })
)

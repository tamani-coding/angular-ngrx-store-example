import { Product } from './../entity/product';
import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { addProduct, clearCart, removeProduct } from './cart.actions';
import { intialCartEntries } from './cart.state';

function filter(productId: number) {
  return (e: Product) => e.id == productId;
}

export const cartReducer = createReducer(
  intialCartEntries,

  on(clearCart, _ => [] ),

  on(addProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),

  on(removeProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find(filter(product.id));
    if (found) {
        entriesClone.splice(entriesClone.indexOf(found), 1)
    }
    return entriesClone;
  })
)

export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type == UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState;
  };
};

import { Product } from './../entity/product';
import { createReducer, on } from '@ngrx/store';
import { addProduct, clearCart, removeProduct } from './cart.actions';
import { intialCartEntries } from './cart.state';

function filter(productId: number) {
  return (e: Product) => e.id == productId;
}

export const cartReducer = createReducer(
  intialCartEntries,
  on(clearCart, entries => [] ),
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

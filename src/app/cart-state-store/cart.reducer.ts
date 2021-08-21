import { createReducer, on } from '@ngrx/store';
import { addProduct, clearCart, removeProduct } from './cart.actions';
import { CartEntry, intialCartEntries } from './cart.state';

function filter(productId: number) {
  return (e: CartEntry) => e.product.id == productId;
}

export const cartReducer = createReducer(
  intialCartEntries,
  on(clearCart, entries => [] ),
  on(addProduct, (entries, product) => {

    const entriesClone: CartEntry[] = JSON.parse(JSON.stringify(entries));
    if (!entriesClone.some(filter(product.id))) {
      entriesClone.push( { product: product, count: 1} );
    } else {
      entriesClone.filter(filter(product.id)).forEach(e => e.count++);
    }

    return entriesClone;
  }),
  on(removeProduct, (entries, product) => {

    const entriesClone: CartEntry[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find(filter(product.id));
    if (found) {
      found.count--;
      if (found.count <= 0) {
        entriesClone.splice(entriesClone.indexOf(found))
      }
    }

    return entriesClone;
  })
)

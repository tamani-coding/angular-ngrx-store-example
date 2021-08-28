import { addProduct, removeProduct } from './../cart-state-store/cart.actions';
import { Observable } from 'rxjs';
import { selectCartEntries, selectCountProducts, ProductGroup } from './../cart-state-store/cart.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearCart } from '../cart-state-store/cart.actions';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  cartEntries$: Observable<IterableIterator<ProductGroup>>

  constructor(private store: Store) {
    this.cartEntries$ = store.select(selectCartEntries);
  }

  ngOnInit(): void {
  }

  clearEntries () {
    this.store.dispatch(clearCart());
  }

  more(entry: ProductGroup) {
    this.store.dispatch(addProduct(entry.product));
  }

  less (entry: ProductGroup) {
    this.store.dispatch(removeProduct(entry.product));
  }

}

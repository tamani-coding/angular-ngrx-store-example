import { addProduct, removeProduct } from './../cart-state-store/cart.actions';
import { Observable } from 'rxjs';
import { selectCartEntries, selectCountProducts } from './../cart-state-store/cart.selectors';
import { CartEntry } from './../cart-state-store/cart.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearCart } from '../cart-state-store/cart.actions';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  cartEntries$: Observable<CartEntry[]>
  countProducts$: Observable<number>

  constructor(private store: Store) {
    this.countProducts$ = store.select(selectCountProducts);
    this.cartEntries$ = store.select(selectCartEntries);
  }

  ngOnInit(): void {
  }

  clearEntries () {
    this.store.dispatch(clearCart());
  }

  more(entry: CartEntry) {
    this.store.dispatch(addProduct(entry.product));
  }

  less (entry: CartEntry) {
    this.store.dispatch(removeProduct(entry.product));
  }

}

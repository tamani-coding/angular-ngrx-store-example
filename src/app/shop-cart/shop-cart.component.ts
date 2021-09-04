import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearCart } from '../cart-state-store/cart.actions';
import { addProduct, removeProduct } from './../cart-state-store/cart.actions';
import { ProductGroup, selectGroupedCartEntries } from './../cart-state-store/cart.selectors';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  cartEntries$: Observable<ProductGroup[]>

  constructor(private store: Store) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
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

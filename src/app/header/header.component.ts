import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts, selectTotalPrice } from './../cart-state-store/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  countProducts$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) {
    this.countProducts$ = store.select(selectCountProducts);
    this.totalPrice$ = store.select(selectTotalPrice)
  }

  ngOnInit(): void {
  }

}

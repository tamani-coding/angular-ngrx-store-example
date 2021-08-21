import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartEntry } from './../cart-state-store/cart.state';
import { selectCountProducts } from './../cart-state-store/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  countProducts$: Observable<number>

  constructor(private store: Store<CartEntry[]>) {
    this.countProducts$ = store.select(selectCountProducts);
  }

  ngOnInit(): void {
  }

}

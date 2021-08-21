import { CartEntry } from './../cart-state-store/cart.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  constructor(private store: Store<CartEntry[]>) { }

  ngOnInit(): void {
  }

}

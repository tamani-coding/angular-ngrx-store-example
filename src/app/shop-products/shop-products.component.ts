import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartEntry } from './../cart-state-store/cart.state';
import { addProduct } from './../cart-state-store/cart.actions';
import { Product } from './../entity/product';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  constructor(private store: Store<CartEntry[]>) { }

  ngOnInit(): void {
  }

  public products(): Product[] {
    return [ {
      id: 1,
      name: "Super Robot 2k",
      description: "With Laser Guns!",
      price: 40.99,
      image: "assets/products/robot.png",
    }, {
      id: 2,
      name: "Lucky Board Game",
      description: "Up to 4 players!",
      price: 35.00,
      image: "assets/products/board_game.png",
    }, {
      id: 3,
      name: "The Art of Videogames",
      description: "Retro Edition. From more than 20 Artists!",
      price: 21.15,
      image: "assets/products/book.png",
    }]
  }

  public buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }
}

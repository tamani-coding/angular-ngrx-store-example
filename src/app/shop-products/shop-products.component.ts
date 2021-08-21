import { Product } from './../entity/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public products(): Product[] {
    return [ {
      name: "Super Robot 2k",
      description: "With Lase Guns!",
      price: 40.99,
      image: "assets/products/robot.png",
    }, {
      name: "Lucky Board Game",
      description: "Up to 4 players!",
      price: 35.00,
      image: "assets/products/board_game.png",
    }, {
      name: "The Art of Videogames",
      description: "Retro Edition. From more than 20 Artists!",
      price: 21.15,
      image: "assets/products/book.png",
    }]
  }
}

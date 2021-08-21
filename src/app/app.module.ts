import { cartReducer } from './cart-state-store/cart-reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopProductsComponent,
    ShopCartComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ cartState: cartReducer }, {}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

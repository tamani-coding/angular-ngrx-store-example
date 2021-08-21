import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';

const routes: Routes = [
  { path: 'products', component: ShopProductsComponent },
  { path: 'cart', component: ShopCartComponent },
  { path: '**', component: ShopProductsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

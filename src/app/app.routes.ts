import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'product-list/:category', component: ProductListComponent },
    { path: 'product/:identification', component: ProductComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'cart', component: CartComponent },
  
];

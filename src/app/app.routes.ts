import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './authentication/login/login.component';


// Define the routes
export const routes: Routes = [

    { path: 'sign-up', component: SignupComponent },
    { path: 'forget-password', component: ForgetPasswordComponent },
    
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'product-list/:category', component: ProductListComponent },
    { path: 'product/:identification', component: ProductComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'login', component:LoginComponent}
  
];

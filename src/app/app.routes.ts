// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { OrderUserComponent } from './order-user/order-user.component';
import { ReviewComponent } from './review/review.component';
import { HomeComponent } from './home/home.component';

// export const routes: Routes = [
// //   { path: '', component: HomeComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'login', component: LoginComponent },
// ];

export const routes: Routes = [
    // { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) },
    { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
    { path: 'products', loadComponent: () => import('./product/product.component').then(m => m.ProductComponent) },
    { path: 'products/:category/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'order', component: OrderComponent},
    { path: 'order-user', component: OrderUserComponent},
    { path: 'review', component: ReviewComponent},
    { path: '', component: HomeComponent},
  ];
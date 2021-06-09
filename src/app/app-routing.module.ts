import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/shop/product-details/product-details.component';
import { ProductListComponent } from './components/shop/product-list/product-list.component';
import { ShippingComponent } from './components/shop/shipping/shipping.component';
import { ShopComponent } from './components/shop/shop.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: 'cart', loadChildren: () => import('./components/shop/shop.module').then(m => m.ShopModule) },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'shop', component: ProductListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

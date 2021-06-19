import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

//COMPONENTES
//HOME
import { HomeComponent } from './components/home/home.component';

//SERVICE
import { ServiceAddComponent } from './components/services/service-add/service-add.component';
import { ServiceDetailsComponent } from './components/services/service-details/service-details.component';
import { ServiceEditComponent } from './components/services/service-edit/service-edit.component';
import { ServicesServicesComponent } from './components/services/services/services.component';

//SHOP
import { ProductAddComponent } from './components/shop/product-add/product-add.component';
import { ProductDetailsComponent } from './components/shop/product-details/product-details.component';
import { ProductEditComponent } from './components/shop/product-edit/product-edit.component';

//USER
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';


const routes: Routes = [
  //RUTAS USER
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  
  //RUTAS SERVICIOS
  { path: 'services', component: ServicesServicesComponent},
  { path: 'details', component: ServiceDetailsComponent},
  { path: 'edit', component: ServiceEditComponent },
  { path: 'add', component: ServiceAddComponent},

  //RUTAS TIENDA
  { path: 'shop', loadChildren: () => import('./components/shop/shop/shop.module').then(m => m.ShopModule) },
  { path: 'shop/details', component: ProductDetailsComponent},
  { path: 'shop/edit', component: ProductEditComponent},
  { path: 'shop/add', component: ProductAddComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

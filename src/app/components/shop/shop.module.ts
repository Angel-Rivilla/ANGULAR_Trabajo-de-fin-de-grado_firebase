import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShippingComponent } from './shipping/shipping.component';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    ShopComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ShippingComponent
  ],
  imports: [
    MatTableModule,
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }

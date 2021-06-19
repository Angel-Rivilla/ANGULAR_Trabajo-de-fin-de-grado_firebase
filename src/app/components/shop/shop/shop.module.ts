import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    ShopComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    MatTableModule,
    MatIconModule,
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { ServiceEditComponent } from './service-edit/service-edit.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    ServicesComponent,
    ServiceEditComponent,
    ServiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    CommonModule,
    ServicesRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule
  ]
})
export class ServicesModule { }

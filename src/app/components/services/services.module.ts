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


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
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

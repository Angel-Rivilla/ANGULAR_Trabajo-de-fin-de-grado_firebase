import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    NgbModal,
    FormsModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

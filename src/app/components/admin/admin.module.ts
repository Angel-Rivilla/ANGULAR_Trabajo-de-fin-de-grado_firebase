import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../user/login/login.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  imports: [
    NgbModal,
    FormsModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ServiceFormModule],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ServiceFormModule]
})
export class ServiceFormModule { }

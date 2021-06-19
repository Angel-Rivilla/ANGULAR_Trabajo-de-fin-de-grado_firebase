import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  template: `<app-product-form></app-product-form>`,
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

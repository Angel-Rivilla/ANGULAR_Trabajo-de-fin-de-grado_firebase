import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  template: `<app-product-form></app-product-form>`,
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

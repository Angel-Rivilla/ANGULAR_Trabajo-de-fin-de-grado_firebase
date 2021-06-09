import { Component, OnInit } from '@angular/core';
import { ShopService } from './Shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items = this.shopService.getItems();

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }

  clearCart() {
    this.shopService.clearCart();
    this.items = [];
  }

}

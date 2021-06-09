import { Component, OnInit } from '@angular/core';
import { ShopService } from '../Shop.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  
  shippingCosts = this.cartService.getShippingPrices();
  constructor(private cartService: ShopService) {
  }

  ngOnInit(): void {
  }

}

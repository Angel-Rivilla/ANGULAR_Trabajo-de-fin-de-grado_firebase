import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/shared/services/products';
import { ShopService } from '../shop/shop/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  
  items = this.productsSvc.getItems();

  producto: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private productsSvc: ShopService) { 
  }

  ngOnInit(): void {
    
  }

  clearCart(){
    this.productsSvc.clearCart();
    this.router.navigate(['shop']);

  }

  deleteItem(): void {
    this.productsSvc.deleteItem();
  }

}

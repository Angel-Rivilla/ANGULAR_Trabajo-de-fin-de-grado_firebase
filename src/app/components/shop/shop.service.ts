import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product-list/products';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  items: Product[] = [];
  

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
  

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) {}

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../product-list/products';
import { AuthService } from 'src/app/shared/services/auth.service';

import { Observable } from 'rxjs';
import { ShopService } from '../Shop.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers:[AuthService]
})
export class ProductDetailsComponent implements OnInit {
  product: Product|undefined;


  public isLogged = false;
  public user:any;
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService,private route: ActivatedRoute,
    private shopService: ShopService) { }

  async ngOnInit(){
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  //this.product = products.find(product => product.id === productIdFromRoute);

  this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged=true;
    }
  
  }

  addToCart(product: Product) {
    this.shopService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}

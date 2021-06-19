import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';

import { Observable } from 'rxjs';
import { ShopService } from '../shop/shop.service';
import { Product } from 'src/app/shared/services/products';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers:[AuthService]
})
export class ProductDetailsComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  producto: any = null;
  
  public isLogged = false;
  public user:any;
  public user$: Observable<any> = this.authSvc.afAuth.user;
  public emailUserNew: any;

  constructor(private router: Router, private productsSvc: ShopService, private authSvc: AuthService) { 
    const navigation = this.router.getCurrentNavigation();
    this.producto = navigation?.extras?.state;
  }

  async ngOnInit(){
    if(typeof this.producto === 'undefined'){
      this.router.navigate(['shop']);
    }
  
    this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged=true;
      this.emailUserNew = this.user.email;
    }
  }

  onGoToEdit(): void {
    this.navigationExtras.state = this.producto;
    this.router.navigate(['shop/edit'], this.navigationExtras);
  }

  async onDelete(){
    alert('deleted')
    try {
      await this.productsSvc.onDeleteProduct(this.producto?.id);
      alert('Deleted');
      this.onGoBackToList();
    } catch (err) {
      console.log(err);
    }
  }

  onGoBackToList(): void{
    this.router.navigate(['shop']);
  }

  addToCart() {
    this.productsSvc.addToCart(this.producto);
    window.alert('Your product has been added to the cart!');
  }

}

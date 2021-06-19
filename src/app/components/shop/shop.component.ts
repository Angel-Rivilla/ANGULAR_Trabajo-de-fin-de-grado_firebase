import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Product } from './product-list/products';
import { Observable } from 'rxjs';
import { ShopService } from './Shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  products$ = this.productsSvc.products;

  public isLogged = false;
  public user:any;
  public user$: Observable<any> = this.authSvc.afAuth.user;
  public emailUserNew: any;

  items = this.productsSvc.getItems();

  constructor(private router: Router, private productsSvc:ShopService, private authSvc: AuthService) { 
    const navigation = this.router.getCurrentNavigation();

  }

  async ngOnInit() {
    this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged=true;
      this.emailUserNew = this.user.email;
    }
  }

  onGoToEdit(item: any): void {
    this.navigationExtras.state = item;
    this.router.navigate(['edit'], this.navigationExtras);

  }

  onGoToAdd(): void {
    this.router.navigate(['add'], this.navigationExtras);
    
  }

  onGoToSee(item: any): void {
    this.navigationExtras.state = item;
    this.router.navigate(['details'],this.navigationExtras);

  }

  clearCart() {
    this.productsSvc.clearCart();
    this.items = [];
  }

  async onGoToDelete(empId: any): Promise<void> {
    try {
      await this.productsSvc.onDeleteProduct(empId);
      alert('Deleted');
    } catch (err) {
      console.log(err);
    }
  }




}

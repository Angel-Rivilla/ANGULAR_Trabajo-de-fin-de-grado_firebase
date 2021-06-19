import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShopService } from '../shop/shop.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public isLogged = false;
  public user:any;
  public user$: Observable<any> = this.authSvc.afAuth.user;

  productsForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });
  

  producto: any =  null;

  constructor(private router: Router, private fb: FormBuilder, private productsSvc: ShopService, private authSvc: AuthService) {
    const navigation = this.router.getCurrentNavigation();
    this.producto = navigation?.extras?.state;
    console.log(this.producto);

   }

   async ngOnInit() {
    this.initForm();

    if(typeof this.producto === 'undefined'){
      this.router.navigate(['add']);
    } else {
      this.productsForm.patchValue(this.producto);
    }

    this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged=true;
    }
    
  }

  onSave(): void {
    console.log('Saved', this.productsForm.value);
    if (this.productsForm.valid) {
      const producto = this.productsForm.value;
      const productoId = this.producto?.id || null;
      const emailUser = this.user.email;
  
      this.productsSvc.onSaveProduct(producto, productoId, emailUser);
      this.productsForm.reset();
    }
  }


  private initForm(): void {
    this.productsForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  onGoBackToList(): void {
    this.router.navigate(['shop']);
  }



}

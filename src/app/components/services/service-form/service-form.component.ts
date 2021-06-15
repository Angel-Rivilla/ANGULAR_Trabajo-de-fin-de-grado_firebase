import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/shared/services/auth.service';
import { ServiceInterface } from 'src/app/shared/services/services.interface';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  public isLogged = false;
  public user:any;
  public user$: Observable<any> = this.authSvc.afAuth.user;

  servicesForm = new FormGroup({
    nombre: new FormControl(''),
    localizacion: new FormControl(''),
    precio: new FormControl(''),
    valoracion: new FormControl(''),
  });

  servicio: any =  null;

  constructor(private router: Router, private fb: FormBuilder, private servicesSvc: ServicesService, private authSvc: AuthService) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state;
    console.log(this.servicio);


   }

  async ngOnInit() {
    this.initForm();
    if(typeof this.servicio === 'undefined'){
      this.router.navigate(['add']);
    } else {
      this.servicesForm.patchValue(this.servicio);
    }

    this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged=true;
    }
    
  }

  onSave(): void {
    console.log('Saved', this.servicesForm.value);
    if (this.servicesForm.valid) {
      const servicio = this.servicesForm.value;
      const serviceId = this.servicio?.id || null;
      const emailUser = this.user.email;
  
      this.servicesSvc.onSaveService(servicio, serviceId, emailUser);
      this.servicesForm.reset();
    }
    
    
  }


  private initForm(): void {
    this.servicesForm = this.fb.group({
      nombre: ['', [Validators.required]],
      localizacion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      valoracion: ['', [Validators.required]],
    })
  }

  onGoBackToList(): void {
    this.router.navigate(['services']);
  }

}

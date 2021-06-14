import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ServiceInterface } from 'src/app/shared/services/services.interface';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  servicesForm = new FormGroup({
    nombre: new FormControl(''),
    localizacion: new FormControl(''),
    precio: new FormControl(''),
    valoracion: new FormControl(''),
  });

  servicioPrueba: ServiceInterface;

  servicio: any =  null;

  constructor(private router: Router, private fb: FormBuilder, private servicesSvc: ServicesService) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state;
    console.log(this.servicio);

    this.servicioPrueba = navigation?.extras?.state?.value;
    console.log(this.servicioPrueba);
   }

  ngOnInit(): void {
    this.initForm();
    if(typeof this.servicio === 'undefined'){
      this.router.navigate(['add']);
    } else {
      this.servicesForm.patchValue(this.servicio);
    }

  }

  onSave(): void {
    console.log('Saved', this.servicesForm.value);
    if (this.servicesForm.valid) {
      const servicio = this.servicesForm.value;
      const serviceId = this.servicio?.id || null;
      console.log(serviceId);
      this.servicesSvc.onSaveService(servicio, serviceId);
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

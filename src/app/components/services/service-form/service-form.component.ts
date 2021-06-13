import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  servicio;
  servicesForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state;
    this.servicesForm = new FormGroup({
      nombre: new FormControl(),
      localizacion: new FormControl(),
      precio: new FormControl(),
      valoracion: new FormControl(),
    });
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

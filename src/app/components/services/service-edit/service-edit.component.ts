import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {

  value;
  servicesForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    this.servicesForm = new FormGroup({
      nombre: new FormControl(),
      localizacion: new FormControl(),
      precio: new FormControl(),
      valoracion: new FormControl(),
    });
   }

  ngOnInit(): void {
    this.initForm();
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
}

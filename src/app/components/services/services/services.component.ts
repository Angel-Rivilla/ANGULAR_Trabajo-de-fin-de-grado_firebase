import { Component, OnInit } from '@angular/core';

import { ServiceInterface } from 'src/app/shared/services/services.interface';
import { NavigationExtras, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesServicesComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  
  fakeData = [
  {
    nombre:'Servicio personal de asistente', 
    localizacion:'Alicante, Puerto', 
    precio:"5 euros/hora", 
    valoracion:"4/5"
  },
  {
    nombre:'Ayuda de movilidad', 
    localizacion:'Alicante, Centro', 
    precio:"15 euros", 
    valoracion:"5/5"
  }
];


  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void {
    this.navigationExtras.state = item;
    this.router.navigate(['edit'], this.navigationExtras);

  }
  onGoToSee(item: any): void {
    this.navigationExtras.state = item;
    this.router.navigate(['details'],this.navigationExtras);

  }
  onGoToDelete(item: any): void {
    alert('Deleted');

  }
}

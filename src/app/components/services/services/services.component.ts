import { Component, OnInit } from '@angular/core';

import { ServiceInterface } from 'src/app/shared/services/services';
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
  data: Array<any>;

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  
  constructor(private router: Router) { 
    this.data= [
      {titulo:'Servicion personal de asistente', 
      localizacion:'Alicante, Puerto', 
      precioServicio:"5 euros/hora", 
      valoracion:"4/5"}

    ]
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

import { Component, OnInit } from '@angular/core';

import { ServiceInterface} from 'src/app/shared/services/services.interface';
import { NavigationExtras, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';

import { ServicesService } from './services.service';

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
  
  services$ = this.servicesSvc.services;
  
  //fakeData = servicesArray;
  

  constructor(private router: Router, private servicesSvc: ServicesService) { 
    const navigation = this.router.getCurrentNavigation();
    
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


 async onGoToDelete(empId: any): Promise<void> {
    try {
      await this.servicesSvc.onDeleteService(empId);
      alert('Deleted');
    } catch (err) {
      console.log(err);
    }
  }

}

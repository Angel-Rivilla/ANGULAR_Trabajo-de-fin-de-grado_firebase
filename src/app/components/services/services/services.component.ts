import { Component, OnInit } from '@angular/core';

import { ServiceInterface} from 'src/app/shared/services/services.interface';
import { NavigationExtras, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ServicesService } from './services.service';
import { Observable } from 'rxjs';

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
 
  public isLogged = false;
  public user:any;
  public user$: Observable<any> = this.authSvc.afAuth.user;
  public emailUserNew: any;


  constructor(private router: Router, private servicesSvc: ServicesService, private authSvc: AuthService) { 
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


 async onGoToDelete(empId: any): Promise<void> {
    try {
      await this.servicesSvc.onDeleteService(empId);
      alert('Deleted');
    } catch (err) {
      console.log(err);
    }
  }

}

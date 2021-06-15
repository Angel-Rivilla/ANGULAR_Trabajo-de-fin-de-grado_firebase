import { Component, OnInit } from '@angular/core';
import { ServiceInterface } from 'src/app/shared/services/services.interface';
import { NavigationExtras, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ServicesService } from '../services/services.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  servicio: any = null;
  public isLogged = false;
  public user:any;
  public user$: Observable<any> = this.authSvc.afAuth.user;
  public emailUser: any;

  constructor(private router: Router, private servicesSvc: ServicesService, private authSvc: AuthService) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state;
    console.log(this.servicio);
  }

  async ngOnInit(){
    if(typeof this.servicio === 'undefined'){
      this.router.navigate(['services']);
    }
    this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged=true;
      this.emailUser = this.user.email;
    }


    
  }

  onGoToEdit(): void {
    this.navigationExtras.state = this.servicio;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  async onDelete(){
    alert('deleted')
    try {
      await this.servicesSvc.onDeleteService(this.servicio?.id);
      alert('Deleted');
      this.onGoBackToList();
    } catch (err) {
      console.log(err);
    }
  }

  onGoBackToList(): void{
    this.router.navigate(['services']);
  }
}

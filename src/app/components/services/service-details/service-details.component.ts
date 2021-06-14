import { Component, OnInit } from '@angular/core';
import { ServiceInterface } from 'src/app/shared/services/services.interface';
import { NavigationExtras, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';


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

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state;
  
  }

  ngOnInit(): void {
    if(typeof this.servicio === 'undefined'){
      this.router.navigate(['services']);
    }
    
  }

  onGoToEdit(): void {
    this.navigationExtras.state = this.servicio;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onDelete(){
    alert('deleted')
  }

  onGoBackToList(): void{
    this.router.navigate(['services']);
  }
}

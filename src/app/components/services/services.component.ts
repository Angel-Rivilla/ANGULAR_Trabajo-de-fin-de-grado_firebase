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
export class ServicesComponent implements OnInit {

  data: Array<any>;
 /* service : ServiceInterface = {
    id: '',
    titulo: '',
    descripcion: '',
    precioServicio: '',
    valoracion: '',
    userId:'',
    userNombre:''
  };*/


  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router) { 
    this.data=[
      {titulo:'Servicion personal de asistente', 
      localizacion:'Alicante, Puerto', 
      precioServicio:"5 euros/hora", 
      valoracion:"4/5"}

    ]
  }

  ngOnInit(): void {
  }

  /*onGuardarService({value}: {value: ServiceInterface}){
    this.authService.afAuth.authState.subscribe(user => {
      value.userId = user?.uid;
      this.serviceService.addNewService(value); 
    });
    
    this.router.navigate(['/']);
  }
*/



}


import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import{ AngularFireAuth} from '@angular/fire/auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers:[AuthService],
})

export class SidenavComponent implements OnInit {

//CONTROL SCROLL
shownav = true;
x= fromEvent(document, 'scroll');
otherScroll = window.pageYOffset;

//LOGIN
botonLogin = 0;
public isLogged = false;
public user:any;
public user$: Observable<any> = this.authSvc.afAuth.user;

//BOTON AYUDA
estadoAyuda = false;
opened = false;

  fillerNav = [
    {name: "Home", route: "", icon: "home"},
  ]

  //FORM LOGIN
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  //FORM REGISTER
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private authSvc: AuthService, private router:Router,public modal: NgbModal){
    this.x.subscribe((res: any)=>{
      const scroll = res.target.documentElement.scrollTop;
      console.log(scroll);
      if(scroll > 100){
        this.shownav = false;
      }
      if(scroll < this.otherScroll){
        this.shownav = true;
      } 
     this.otherScroll = scroll;
    })
  }
  async ngOnInit(){
    this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged=true;
    }
  }

  async onLogout(){
    try {
      await this.authSvc.logout();
      this.router.navigate(['/user/login']);
      
    }
    catch(error){console.log(error)}
  }


  sidenavControl(){
    if(this.opened == false){
     this.opened = true;
    } else {
     this.opened = false;
    }
  }

  helpControl(){
    if(this.estadoAyuda == false){
      this.estadoAyuda = true;
     } else {
      this.estadoAyuda = false;
     }
  }

  //LOGIN Y REGISTRO
  openLG(contenido: any){
    this.modal.open(contenido, {size:'lg'});
  }


  //LOGIN
  async onLogin(){
    const {email, password} = this.loginForm.value;
    try{
      const user = this.authSvc.login(email,password);
      if(await user){
          this.router.navigate(['home']);
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  //REGISTRO
  async onRegister(){
    const {email, password} = this.registerForm.value;
    try{
    const user = this.authSvc.register(email, password);
    if(await user){
      this.router.navigate(['home']);
    }
    } catch(error)
    {
      console.log(error)
    
    }
  }


}

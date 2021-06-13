
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import{ AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers:[AuthService],
})
export class SidenavComponent implements OnInit {
public isLogged = false;
public user:any;
public user$: Observable<any> = this.authSvc.afAuth.user;

opened = false;

  fillerNav = [
    {name: "Home", route: "", icon: "home"},
   

  ]

  constructor(private authSvc: AuthService, private router:Router){}
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

}

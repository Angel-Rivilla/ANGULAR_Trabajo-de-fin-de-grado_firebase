import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers:[AuthService]
})
export class SidenavComponent implements OnInit {

public isLogged = false;
public user:any;
  constructor(private authSvc: AuthService){}
  async ngOnInit(){
    console.log('Navbar');
    this.user = await this.authSvc.getCurrentUser()
    if(this.user){
      this.isLogged=true;
    }
  }

}

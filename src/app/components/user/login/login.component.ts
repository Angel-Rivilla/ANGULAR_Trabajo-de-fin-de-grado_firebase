import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/shared/services/auth.service';
//import { UserI } from 'src/app/shared/services/user.interface';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

registerStatus = 0;
 // constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    //const user: UserI ={
     // email: 'bezael@me.com',
      //password: '123456'
    };
    //this.authSvc.loginByEmail(user);
  }



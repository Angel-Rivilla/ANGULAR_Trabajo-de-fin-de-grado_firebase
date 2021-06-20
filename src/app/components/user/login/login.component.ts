import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor(private authSvc:AuthService,private router: Router, public modal: NgbModal){}
  ngOnInit(): void {}
  
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

  openLG(contenido: any){
    this.modal.open(contenido, {size:'lg'});
  }


}



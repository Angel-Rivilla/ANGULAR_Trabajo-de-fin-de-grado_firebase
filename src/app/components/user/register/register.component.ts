import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, EmailValidator} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private authSvc:AuthService,private router: Router) { }

  ngOnInit(): void {
  }

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

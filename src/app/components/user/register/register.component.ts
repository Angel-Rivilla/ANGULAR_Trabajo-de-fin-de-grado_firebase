import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, EmailValidator} from '@angular/forms';
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
  constructor(private authSvc:AuthService) { }

  ngOnInit(): void {
  }

  onRegister(){
    const {email, password} = this.registerForm.value;
    this.authSvc.register(email, password);
  }

}

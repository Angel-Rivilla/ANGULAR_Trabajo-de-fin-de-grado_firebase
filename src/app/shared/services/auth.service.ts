
import { Injectable } from '@angular/core';
import {UserI} from '../services/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //public userData:Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) { }
  loginByEmail(user:UserI){
    const {email,password} = user;
    this.afAuth
      .signInWithEmailAndPassword(email,password)
    .then(res => {
      console.log('Successfully,res');
    })
    .catch(err => console.log('Error',err));
  }
  logout(){
    this.afAuth.signOut();
  }

}
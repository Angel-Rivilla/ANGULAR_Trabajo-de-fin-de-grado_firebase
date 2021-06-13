
import { Injectable } from '@angular/core';
import{first} from 'rxjs/operators'
//import {UserI} from '../services/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';
//import {Observable} from 'rxjs'
//import{firebase} from 'firebase/app';
//import{auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //public user:User;

  //public userData:Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) { }
  
  async logout(){
    await this.afAuth.signOut();
  }

  async login(email: string, password: string){
    const result = await this.afAuth.signInWithEmailAndPassword(email,password);
    return result;
  }

  async register(email: string, password: string){
    const result= await this.afAuth.createUserWithEmailAndPassword(email,password);
    return result;
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

}


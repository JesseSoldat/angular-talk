import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable() 
export class AuthService {
  public message = new BehaviorSubject("");;

  constructor(private router: Router,
    private afAuth: AngularFireAuth) {}

    emailRegister(email: string, password: string) {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(user => {
        // this.message.next('The User was Created');
        
      })
      .catch(err => {
        console.log(err.message);
        this.message.next(err.message);
      });
    }

    emailLogin(email: string, password: string) {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(user => {
        this.message.next('Logged in Successfully');
      })
      .catch(err => {
        this.message.next(err.message);
      });
    }
}

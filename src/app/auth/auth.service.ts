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
        console.log('User created', user);
        this.message.next('The User was Created');
      })
      .catch(err => {
        console.log(err.message);
        this.message.next(err.message);
      });
    }
}

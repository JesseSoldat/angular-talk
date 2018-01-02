import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataStoreService } from './data-store.service';
import { createMessageObj } from '../shared/helper-functions';

@Injectable() 
export class AuthService implements OnInit {
 
  private uid = new BehaviorSubject(null);
  public readonly uid$: Observable<string> = this.uid.asObservable();

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private dataStoreService: DataStoreService) {}

    ngOnInit() {
      this.getUser();
    }

    emailRegister(email: string, password: string) {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(user => {          
        this.authenticationSuccess(user);             
      })
      .catch(err => {
        const errObj = createMessageObj(err.message, 'danger');
        this.dataStoreService.changeAlert(errObj);
      });
    }

    emailLogin(email: string, password: string) {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(user => {
        this.authenticationSuccess(user);
      })
      .catch(err => {
        const errObj = createMessageObj(err.message, 'danger');  
        this.dataStoreService.changeAlert(errObj);            
      });
    }

    authenticationSuccess(user) {
      this.dataStoreService.clearAlert();                  
      localStorage.setItem('uid', user.uid);
      this.uid.next(user.uid);
      this.router.navigate(['dashboard']);
    }

    getUser() {
      let uid = localStorage.getItem('uid');
      if(uid !== 'null') {
        this.uid.next(uid);        
        this.router.navigate(['dashboard']);   
        return;                  
      }
      this.uid.next(null);
    }

    getUid() {
      return localStorage.getItem('uid');
    }

    logout() {
      return this.afAuth.auth.signOut().then(() => {
        this.dataStoreService.clearAlert();                          
        localStorage.setItem('uid', null);
        this.uid.next(null);   
        this.router.navigate(['']);                       
      })
      .catch(err => {
        const errObj = createMessageObj(err.message, 'danger');
        this.dataStoreService.changeAlert(errObj);         
      });
    }
}

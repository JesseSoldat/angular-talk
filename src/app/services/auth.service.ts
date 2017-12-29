import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable() 
export class AuthService implements OnInit {
  private message = new BehaviorSubject("");
  public readonly message$: Observable<string> = this.message.asObservable();
  private uid = new BehaviorSubject(null);
  public readonly uid$: Observable<string> = this.uid.asObservable();

  constructor(private router: Router,
    private afAuth: AngularFireAuth) {}

    ngOnInit() {
      this.getUser();
    }

    clearMessage() {
      this.message.next('');
    }

    emailRegister(email: string, password: string) {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(user => {
        localStorage.setItem('uid', user.uid);  
        this.uid.next(user.uid); 
        this.router.navigate(['dashboard']);                     
      })
      .catch(err => {
        this.message.next(err.message);
      });
    }

    emailLogin(email: string, password: string) {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(user => {
        this.message.next('Logged in Successfully');
        localStorage.setItem('uid', user.uid);
        this.uid.next(user.uid);
        this.router.navigate(['dashboard']);
      })
      .catch(err => {
        this.message.next(err.message);
      });
    }

    getUser() {
      let uid = localStorage.getItem('uid');
      console.log(uid);
      if(uid !== 'null') {
        this.uid.next(uid);        
        this.router.navigate(['dashboard']);   
        return;                  
      }
      this.uid.next(null);
    }

    logout() {
      return this.afAuth.auth.signOut().then(() => {
        localStorage.setItem('uid', null);
        this.uid.next(null);   
        this.router.navigate(['']);                       
      })
      .catch(err => {

      });
    }
}

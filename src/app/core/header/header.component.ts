import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy {
  uid = null;
  subscription: Subscription;

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUser();

    this.subscription = this.authService.uid$.subscribe(uid => {
      this.uid = uid; 
      if(this.uid === null) {
        this.router.navigate(['']);
      }     
    }); 
  }

  onNavigate(e, route) {
    e.preventDefault();
    this.authService.clearMessage();
    this.router.navigate([route]);
  }

  onLogout(e) {
    e.preventDefault();
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
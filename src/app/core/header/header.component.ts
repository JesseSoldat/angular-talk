import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { DataStoreService } from '../../services/data-store.service';

declare let jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {
  @Input() activeClass: string;
  uid = null;
  subscription: Subscription;
  linkStyle;

  

  constructor(private router: Router,
              private authService: AuthService,
              private dataStoreService: DataStoreService) {}

  ngOnInit() {
    this.authService.getUser();

    this.subscription = this.authService.uid$.subscribe(uid => {
      this.uid = uid; 
      if(this.uid === null) {
        this.router.navigate(['']);
      }     
    }); 

    const navMain = jQuery(".navbar-collapse"); 
  
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, () => {
      navMain.collapse('hide');
    });
  }

  ngOnChanges(change) {
    if(change['activeClass']) {
      // console.log(change.activeClass.currentValue);
    }
  }

  getLinkStyle(linkText) {
    return this.linkStyle = {
      'color': linkText === this.activeClass ? '#18bc9c' : 'white',
      };
    
  }

  onNavigate(e, route) {
    e.preventDefault();
    this.dataStoreService.clearAlert();
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
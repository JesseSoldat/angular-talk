import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  uid = null;

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUser();
    
    this.authService.uid.subscribe(uid => {
      this.uid = uid; 
      if(this.uid === null) {
        this.router.navigate(['']);
      }     
    }); 
  }

  onNavigate(e, route) {
    e.preventDefault();
    this.router.navigate([route]);
  }

  onLogout(e) {
    e.preventDefault();
    this.authService.logout();
  }

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(private router: Router) {}

  onRegister(e) {
    e.preventDefault();
    this.router.navigate(['register']);
  }

  onLogin(e) {
    e.preventDefault();
    this.router.navigate(['login']);
  }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy  {
  message: string;
  subscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.authService.message.subscribe(msg => {
      this.message = msg;
    });
  }

  formSubmitted({email, password}) {
    this.authService.emailLogin(email, password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
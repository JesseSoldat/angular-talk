import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit, OnDestroy {
  message: string;
  subscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.authService.message.subscribe(msg => {
      this.message = msg;
    });
  }

  formSubmitted({email, password}) {
    this.authService.emailRegister(email, password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
}
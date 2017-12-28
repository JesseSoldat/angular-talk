import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  message: string;

  constructor(private authService: AuthService) {
    authService.message.subscribe(msg => {
      this.message = msg;
    });
  }

  formSubmitted({email, password}) {
    this.authService.emailRegister(email, password);
  }

  
}
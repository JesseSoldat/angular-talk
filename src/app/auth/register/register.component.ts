import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
 
  constructor(private authService: AuthService) {}

  formSubmitted({email, password}) {
    this.authService.emailRegister(email, password);
  } 
}
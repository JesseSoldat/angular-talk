import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  message$: Observable<string>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.message$ = this.authService.message$;
  }

  formSubmitted({email, password}) {
    this.authService.emailRegister(email, password);
  } 
}
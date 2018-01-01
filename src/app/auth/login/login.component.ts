import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message$: Observable<string>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.message$ = this.authService.message$;
  }

  formSubmitted({email, password}) {
    this.authService.emailLogin(email, password);
  } 
}
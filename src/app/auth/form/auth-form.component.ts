import { Component, Input, EventEmitter, Output } from '@angular/core';
import User from '../../models/user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
}) 
export class AuthFormComponent {
  @Input() formType: string;
  @Output() formSubmitted = new EventEmitter<User>();

  onSubmit(form) {
    const user: User = {
      email: form.value.email,
      password: form.value.password
    }
    this.formSubmitted.emit(user);
  }
}

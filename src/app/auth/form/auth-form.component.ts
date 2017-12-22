import { Component, Input, EventEmitter, Output } from '@angular/core';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
}) 
export class AuthFormComponent {
  @Input() formType: string;
  @Input() message: string;
  @Output() formSubmitted = new EventEmitter<User>();

  onSubmit(form) {
    const user: User = {
      email: form.value.email,
      password: form.value.password
    }
    this.formSubmitted.emit(user);
  }
}

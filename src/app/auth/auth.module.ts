import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Components
import { AuthFormComponent } from './form/auth-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthFormComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
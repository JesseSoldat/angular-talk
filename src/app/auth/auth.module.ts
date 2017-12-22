import { NgModule } from '@angular/core';

//Components
import { AuthFormComponent } from './form/auth-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthFormComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
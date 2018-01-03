import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [
  { path: 'register', component: RegisterComponent, data: { state: 'register' } },
  { path: 'login', component: LoginComponent, data: { state: 'login' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}
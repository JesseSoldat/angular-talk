import { NgModule } from '@angular/core';
import { AuthService } from '../auth/auth.service';
//Components
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [

  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule {}
import { NgModule } from '@angular/core';
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

  ]
})
export class CoreModule {}
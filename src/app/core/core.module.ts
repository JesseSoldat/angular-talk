import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
//Modules
import { SharedModule } from '../shared/shared.module';
//Services
import { SearchService } from '../search/search.service';
import { AuthService } from '../auth/auth.service';
import { DataStoreService } from '../shared/data-store.service';
//Components
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    HttpModule,
    JsonpModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    AuthService,
    SearchService,
    DataStoreService

  ]
})
export class CoreModule {}
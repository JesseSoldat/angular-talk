import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
//Modules
import { SharedModule } from '../shared/shared.module';
//Services
import { SearchService } from '../services/search.service';
import { AuthService } from '../services/auth.service';
import { DataStoreService } from '../services/data-store.service';
import { FavoritesService } from '../services/favorites.service';
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
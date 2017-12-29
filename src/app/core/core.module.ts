import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule, JsonpModule } from '@angular/http';
import { environment } from '../../environments/environment';
// import '../../shared/rxjs-extensions';


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

//Third Party
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';



@NgModule({
  declarations: [
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  exports: [
    HeaderComponent,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    SearchService,
    FavoritesService,
    DataStoreService

  ]
})
export class CoreModule {}
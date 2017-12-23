import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
//Components
import { SearchBoxComponent } from './search-box/search-box.component';
import { CardComponent } from './card/card.component';
//Third Party
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    SearchBoxComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  exports: [
    SearchBoxComponent,
    CardComponent,
    CommonModule,
    FormsModule
    
  ]
})
export class SharedModule {}
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatchedUserComponent } from './matched-user.component';
import { MatchedUserRoutingModule } from './matched-user-routing.module';

@NgModule({
  declarations: [
    MatchedUserComponent
  ],
  imports: [
    MatchedUserRoutingModule,
    SharedModule
  ]
})
export class MatchedUserModule { }
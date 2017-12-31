
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchedUserComponent } from './matched-user.component';
import { MatchedUserRoutingModule } from './matched-user-routing.module';

@NgModule({
  declarations: [
    MatchedUserComponent
  ],
  imports: [
    CommonModule,
    MatchedUserRoutingModule
  ]
})
export class MatchedUserModule { }
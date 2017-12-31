import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchedUserComponent } from './matched-user.component';

const matchedUserRoutes: Routes = [
  { path: '', component: MatchedUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(matchedUserRoutes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class MatchedUserRoutingModule { }
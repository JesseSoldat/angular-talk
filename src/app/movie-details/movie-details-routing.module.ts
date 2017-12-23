import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsComponent } from './movie-details.component';

const movieDetailsRoutes: Routes = [
  { path: '', component: MovieDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(movieDetailsRoutes)
  ],
  exports: [RouterModule]
})
export class MovieDetailsRoutingModule { }
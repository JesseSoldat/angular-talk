import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './movie-details.component';

@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    SharedModule,
    MovieDetailsRoutingModule
  ]
})
export class MovieDetailsModule { }
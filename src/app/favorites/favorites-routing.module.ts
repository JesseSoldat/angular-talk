import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites.component';

const FavoritesRoutes: Routes = [
  { path: '', component: FavoritesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(FavoritesRoutes)
  ],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
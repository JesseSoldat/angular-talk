import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites.component';
import { FavoritesResolver } from '../services/favorites.resolver';

const FavoritesRoutes: Routes = [
  { 
    path: '', 
    component: FavoritesComponent,
    resolve: {
      favorites: FavoritesResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(FavoritesRoutes)
  ],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
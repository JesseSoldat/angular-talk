import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './core/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
  { path: 'movie-details', loadChildren: 'app/movie-details/movie-details.module#MovieDetailsModule'},
  { path: 'favorites', loadChildren: 'app/favorites/favorites.module#FavoritesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

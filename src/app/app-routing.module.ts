import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './core/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, data: { state: '' }  },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', data: { state: 'dashboard' } },
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule', data: { state: 'search' } },
  { path: 'movie-details', loadChildren: 'app/movie-details/movie-details.module#MovieDetailsModule', data: { state: 'movie-details' }},
  { path: 'favorites', loadChildren: 'app/favorites/favorites.module#FavoritesModule', data: { state: 'favorites' }},
  { path: 'matched-user/:name/:uid', loadChildren: 'app/matched-user/matched-user.module#MatchedUserModule', data: { state: 'matched-user' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

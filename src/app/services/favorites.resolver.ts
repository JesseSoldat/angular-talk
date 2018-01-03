import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { FavoritesService } from "../services/favorites.service";
import { Observable } from "rxjs/Observable";
import Movie from '../models/movie';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class FavoritesResolver implements Resolve<any> {
  favoritesSubscription: Subscription;
  favorites: Movie[];

  constructor(private favoritesService: FavoritesService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot) {
   
    return this.favoritesService.getFavoritesResolve().subscribe(data => data);
  }
}
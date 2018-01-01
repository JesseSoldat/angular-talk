import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../services/favorites.service';
import { DataStoreService } from '../services/data-store.service';
import { Observable } from 'rxjs/Observable';
import Movie from '../models/movie';
import { getScroll } from '../shared/helper-functions';
import { Subscription } from 'rxjs/Subscription';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favoritesSubscription: Subscription;
  currentFavoritesSubscription: Subscription;
  favorites: Movie[];
  spinner = true;
  heart = true;
  favoritesCached = false;

  //Modal
  showModal = false;

  //PIPES
  filterListBy: string;

  constructor(private router: Router,
              private favoritesService: FavoritesService,
              private dataStoreService: DataStoreService) {}

  ngOnInit() { 
    this.currentFavoritesSubscription = this.dataStoreService.currentFavorites$.subscribe(currentFavorites => {
      if(currentFavorites === null) {
        this.favoritesCached = false;
        this.getFavoritesFromApi();
        return;
      }
      this.spinner = false;
      this.favoritesCached = true;
      this.favorites = currentFavorites;
    });   
  }

  getFavoritesFromApi() {
    this.favoritesSubscription = this.favoritesService.getFavorites().subscribe(data => {
      this.spinner = false;
      console.log('getFavorites from API');
      this.favorites = cloneDeep(data.reverse());
    }); 
  }

  getMovieDetails(movie) {
    let position = getScroll(); //returns [x, y]
    this.dataStoreService.changeCurrentMovie(movie);
    this.favoritesCached = true;
    this.dataStoreService.changeCurrentFavorites(this.favorites);
    this.dataStoreService.changeScrollPosition(position);
    this.dataStoreService.changeNavFrom('favorites');
    this.router.navigate(['/movie-details', { id: movie.id }]);
  }

  onDeleteFromFavorites(movie) {
    //Delete from TEMP CACHED ARRAY
    if(this.favoritesCached) {
      let index = this.favorites.findIndex(m => m.id === movie.id);
      this.favorites.splice(index, 1);
    }
    //DELETE from the API
    let key = movie.key;
    this.favoritesService.deleteFromFavorites(key);  
  }

  onFilterText(text) {
    this.filterListBy = text;
  }

  onSearchUsersMovies(){
    this.showModal = true;
  }

  onHideModal() {
    this.showModal = false;
  }

  ngOnDestroy() {
    if(this.favoritesSubscription !== undefined) {
      this.favoritesSubscription.unsubscribe();      
    }
    if(this.currentFavoritesSubscription !== undefined) {
      this.currentFavoritesSubscription.unsubscribe();
    }
    
  }

}
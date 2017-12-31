import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../services/search.service';
import { FavoritesService } from '../services/favorites.service';
import { DataStoreService } from '../services/data-store.service';
import Movie from '../models/movie';
import {differenceBy } from 'lodash';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy {
  currentSearchResults: Movie[] = [];
  subscription: Subscription;
  favorites: Movie[];
  heart = false;

  constructor(private searchService: SearchService,
              private favoritesService: FavoritesService,
              private dataStoreService: DataStoreService) {}

  ngOnInit() {
    this.dataStoreService.updateNavFrom('search');
    //get the user's favorites in advance to compare with any new search results 
    this.favoritesService.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });

    //get the results from the service first and fall back to localStorage
    this.subscription = this.dataStoreService.currentSearchResults$
      .subscribe(results => {
        if(results === null) {
          this.currentSearchResults = JSON.parse(localStorage.getItem('currentSearchResults'));
          if(this.currentSearchResults === null ) {
            this.currentSearchResults = [];
            return;
          }
        } else {
          this.currentSearchResults = results;          
        }
    }); 
  }


  searchDatabase(searchText: string) {
    this.searchService.searchMovies(searchText).subscribe(response => {
      let results = this.compareSearchedWithFavorites(response.results);
      this.dataStoreService.changeCurrentSearch(results);
    });
  }

  onAddToFavorites(id: string) {
    //get the detailed movie object first to save to firebase
    this.searchService.searchMovie(id).subscribe(movie => {
      this.favoritesService.addToFavorites(movie).then(key => {
        this.currentSearchResults = this.compareSearchedWithFavorites(this.currentSearchResults);
        this.dataStoreService.changeCurrentSearch(this.currentSearchResults);
        console.log(key);
      });
    });
  }

  compareSearchedWithFavorites(results) {
    return differenceBy(results, this.favorites, 'id');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../services/search.service';
import { FavoritesService } from '../services/favorites.service';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy {
  currentSearchResults = [];
  subscription;

  constructor(private searchService: SearchService,
              private favoritesService: FavoritesService,
              private dataStoreService: DataStoreService) {}

  ngOnInit() {
    this.subscription = this.dataStoreService.currentSearchResults
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


  searchDatabase(searchText) {
    this.searchService.searchMovies(searchText).subscribe(response => {
      this.dataStoreService.changeCurrentSearch(response.results);
    });
  }

  onAddToFavorites(id) {
    this.searchService.searchMovie(id).subscribe(movie => {
      this.favoritesService.addToFavorites();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
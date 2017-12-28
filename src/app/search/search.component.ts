import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from './search.service';
import { DataStoreService } from '../shared/data-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy {
  currentSearchResults = [];
  subscription;

  constructor(private searchService: SearchService,
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
    // console.log(searchText);
    this.searchService.searchMovies(searchText)
      .subscribe(response => {
        // console.log(response.results);
        // this.movies = response.results;
        this.dataStoreService.changeCurrentSearch(response.results);

      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
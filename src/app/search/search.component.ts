import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { DataStoreService } from '../shared/data-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  currentSearchResults$;

  constructor(private searchService: SearchService,
              private dataStoreService: DataStoreService) {}

  ngOnInit() {
    this.currentSearchResults$ = this.dataStoreService.currentSearchResults;   
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
}
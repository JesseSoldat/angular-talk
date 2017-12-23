import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  movies;

  constructor(private searchService: SearchService) {
    // searchService.searchMovies('Star Wars').subscribe(results => {
    //   console.log(results);
    // })
  }

  searchDatabase(searchText) {
    // console.log(searchText);
    this.searchService.searchMovies(searchText)
      .subscribe(response => {
        // console.log(response.results);
        this.movies = response.results;

      });
  }
}
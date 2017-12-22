import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  constructor(private searchService: SearchService) {
    // searchService.searchMovies('Star Wars').subscribe(results => {
    //   console.log(results);
    // })
  }

  searchDatabase(searchText) {
    // console.log(searchText);
    this.searchService.searchMovies(searchText)
      .subscribe(results => {
        console.log(results);
      });
  }
}
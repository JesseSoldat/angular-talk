import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataStoreService {
  currentMovie = new BehaviorSubject(null);
  currentSearchResults = new BehaviorSubject(null);


  changeCurrentSearch(searchResults) {
    localStorage.setItem('currentSearchResults', JSON.stringify(searchResults));
    this.currentSearchResults.next(searchResults);
  }

  changeCurrentMovie(movie) {
    localStorage.setItem('currentMovie', JSON.stringify(movie));
    this.currentMovie.next(movie);
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import Movie from '../models/movie';

@Injectable()
export class DataStoreService {
  private currentMovie = new BehaviorSubject(null);
  public readonly currentMovie$: Observable<string> = this.currentMovie.asObservable();

  private navFrom = new BehaviorSubject('');
  public readonly navFrom$: Observable<string> = this.navFrom.asObservable();

  private currentSearchResults = new BehaviorSubject(null);
  public readonly currentSearchResults$: Observable<Movie[]> = this.currentSearchResults;

  updateNavFrom(route) {
    this.navFrom.next(route);
  }

  changeCurrentSearch(searchResults) {
    localStorage.setItem('currentSearchResults', JSON.stringify(searchResults));
    this.currentSearchResults.next(searchResults);
  }

  changeCurrentMovie(movie) {
    localStorage.setItem('currentMovie', JSON.stringify(movie));
    this.currentMovie.next(movie);
  }

}
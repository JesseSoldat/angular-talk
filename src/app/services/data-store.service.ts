import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import Movie from '../models/movie';
import { cloneDeep } from 'lodash';

@Injectable()
export class DataStoreService {

  private currentMovie = new BehaviorSubject(null);
  public readonly currentMovie$: Observable<string> = this.currentMovie.asObservable();

  private currentSearchResults = new BehaviorSubject(null);
  public readonly currentSearchResults$: Observable<Movie[]> = this.currentSearchResults;

  private navFrom = new BehaviorSubject('');
  public readonly navFrom$: Observable<string> = this.navFrom.asObservable();

  private scrollPosition = new BehaviorSubject([0, 0]);
  public readonly scrollPosition$: Observable<number[]> = this.scrollPosition.asObservable();

  changeNavFrom(route: string) {
    this.navFrom.next(route);
  }

  changeCurrentSearch(searchResults) {
    let clonedSearchResults = cloneDeep(searchResults); 
    localStorage.setItem('currentSearchResults', JSON.stringify(clonedSearchResults));
    this.currentSearchResults.next(clonedSearchResults);
  }

  changeCurrentMovie(movie: Movie) {
    let clonedMovie = cloneDeep(movie);
    localStorage.setItem('currentMovie', JSON.stringify(clonedMovie));
    this.currentMovie.next(clonedMovie);
  }

  changeScrollPosition(position: number[]) {
    let copiedPosition = position.slice();
    this.scrollPosition.next(copiedPosition);
  }

}
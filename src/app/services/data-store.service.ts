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

  private currentFavorites = new BehaviorSubject(null);
  public readonly currentFavorites$: Observable<Movie[]> = this.currentFavorites.asObservable();

  private unMatchedMovieIds = new BehaviorSubject([]);
  public readonly unMatchedMovieIds$: Observable<number[]> = this.unMatchedMovieIds.asObservable();

  private navFrom = new BehaviorSubject('');
  public readonly navFrom$: Observable<string> = this.navFrom.asObservable();

  private scrollPosition = new BehaviorSubject([0, 0]);
  public readonly scrollPosition$: Observable<number[]> = this.scrollPosition.asObservable();

  public matchedUid: string;
  public matchedName: string;

  changeNavFrom(route: string, uid?: string, name?: string) {
    if (uid && name) {
      this.matchedUid = uid;
      this.matchedName = name;
    }
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

  changeCurrentFavorites(movies: Movie[]) {
    let clonedMovies = cloneDeep(movies);
    this.currentFavorites.next(clonedMovies);
  }

  changeScrollPosition(position: number[]) {
    let copiedPosition = position.slice();
    this.scrollPosition.next(copiedPosition);
  }

  changeUnMatchedMovieIds(unMatchedIds: number[]) { 
    let copiedUnMatchedIds = unMatchedIds.slice();
    this.unMatchedMovieIds.next(copiedUnMatchedIds);
  }

}
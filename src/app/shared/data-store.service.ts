import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataStoreService {
  currentMovie = new BehaviorSubject(null);

  changeCurrentMovie(movie) {
    localStorage.setItem('currentMovie', JSON.stringify(movie));
    this.currentMovie.next(movie);
  }
}
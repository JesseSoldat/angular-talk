import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataStoreService {
  currentMovie = new BehaviorSubject({});

  changeCurrentMovie(movie) {
    this.currentMovie.next(movie);
  }
}
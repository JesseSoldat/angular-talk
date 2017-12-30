import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import Movie from '../models/movie';
//Firebase
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';


@Injectable()
export class FavoritesService {
  movie;
  movies;
  otherUsersList: AngularFireList<Movie[]>;

  constructor(private authService: AuthService,
              private afDb: AngularFireDatabase) {}

  getFavorites() {
    const uid = this.authService.getUid();
    const ref = `moviedb/users/${uid}/movies`;
    this.movies = this.afDb.list(ref) as AngularFireList<Movie[]>;
    // return this.movies.valueChanges();
    return this.movies.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    });
  }

  addToFavorites(m: Movie) {   
    const movie: Movie = this.createMovie(m);
    const uid = this.authService.getUid();
    const ref = `moviedb/users/${uid}/movies`;
    this.movies = this.afDb.list(ref) as AngularFireList<Movie[]>;
    return this.movies.push(movie).then(item => {
      return item.key
    });
  }

  deleteFromFavorites(key) {
    const uid = this.authService.getUid();
    const ref = `moviedb/users/${uid}/movies`;
    this.movies = this.afDb.list(ref) as AngularFireList<Movie[]>;
    this.movies.remove(key);
  }

  getOtherUsersLists() {
    this.otherUsersList = this.afDb.list(`moviedb/users`) as AngularFireList<any>;
    return this.otherUsersList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    });;
  }

  createMovie(m) {
    const movie = new Movie(
      m.title,
      m.poster_path,
      m.homepage,
      m.id,
      m.original_title,
      m.overview,
      m.production_companies,
      m.release_date,
      m.vote_average
    );
    return movie;
  }
  
}
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import Movie from '../models/movie';
//Firebase
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';


@Injectable()
export class FavoritesService {
  movie: AngularFireList<Movie[]>;
  movies;

  constructor(private authService: AuthService,
              private afDb: AngularFireDatabase) {}

  getFavorites() {
    const uid = this.authService.getUid();
    const ref = `moviedb/users/${uid}/movies`;
    this.movies = this.afDb.list(ref) as AngularFireList<Movie[]>;
    return this.movies.valueChanges();
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
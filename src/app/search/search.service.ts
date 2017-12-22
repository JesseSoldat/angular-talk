import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { API_KEY } from '../config';
//Firebase
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SearchService {
  apiKey = API_KEY; //themoviedb API
  baseUrl = 'https://api.themoviedb.org/3/';
  callBack = 'callback=JSONP_CALLBACK';
  popular = 'sort_by=popularity.desc';

  constructor(private jsonp: Jsonp, 
    private afDb: AngularFireDatabase) {}

    searchMovies(term: string) {
      return this.jsonp.get(`${this.baseUrl}search/movie?query=${term}&${this.popular}&api_key=${this.apiKey}&${this.callBack}`)
        .map(result => result.json());
    }


}
import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Observable } from 'rxjs/Observable';
import Movie from '../models/movie';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: Movie[];
  spinner = true;
  heart = true;

  //PIPES
  filterListBy: string;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {

    this.favoritesService.getFavorites().subscribe(data => {
      this.spinner = false;
      this.favorites = data.reverse();
    }); 
  }

  onDeleteFromFavorites(movie) {
    let key = movie.key;
    this.favoritesService.deleteFromFavorites(key);
    
  }

  onFilterText(text) {
    this.filterListBy = text;
  }

}
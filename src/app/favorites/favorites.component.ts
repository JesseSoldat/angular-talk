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
  favorites;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favoritesService.getFavorites().subscribe(data => {
      this.favorites = data;
      console.log(data);
    });
    
  }

}
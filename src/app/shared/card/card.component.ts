import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service';
import { hoverImageTrigger } from './card.animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [ hoverImageTrigger ]
})
export class CardComponent {
  @Input() movie;
  @Input() heart;
  @Output() onAddToFavorites = new EventEmitter();
  @Output() onDeleteFromFavorites = new EventEmitter();
  @Output() onGetMovieDetails = new EventEmitter();
  disabled = false;
  hoverImage = 'default';
  

  constructor(private router: Router,
              private dataStoreService: DataStoreService) {}
              
  updateHoverImage(type) {
    this.hoverImage = type;
  }

  movieDetails(movie) {
    this.onGetMovieDetails.emit(movie);
  }

  addToFavorites(id) {
    this.disabled = true;
    this.onAddToFavorites.emit(id);
  }

  deleteFromFavorites(movie) {
    this.disabled = true;    
    this.onDeleteFromFavorites.emit(movie);
  }

}
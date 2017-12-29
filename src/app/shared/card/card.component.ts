import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() movie;
  @Input() heart;
  @Output() onAddToFavorites = new EventEmitter();

  constructor(private router: Router,
              private dataStoreService: DataStoreService) {}


  movieDetails(movie) {
    this.dataStoreService.changeCurrentMovie(movie);
    this.router.navigate(['movie-details', { id: movie.id }]);
  }

  addToFavorites(id) {
    this.onAddToFavorites.emit(id);
  }

}
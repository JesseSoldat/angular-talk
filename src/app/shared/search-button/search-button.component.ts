import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent {
  @Input() buttonText: string;
  @Output() onSearchUsersMovies = new EventEmitter();

  searchUsersMovies() {
    this.onSearchUsersMovies.emit();
  }
}
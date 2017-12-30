import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchBoxComponent {
  @Input() buttonText: string;
  @Input() showButton: boolean;
  @Output() onSearchUsersMovies = new EventEmitter();


  searchUsersMovies() {
    this.onSearchUsersMovies.emit();
  }
}
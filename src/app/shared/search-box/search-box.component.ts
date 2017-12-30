import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Input() parent: string;
  @Input() placeholder: string;
  @Output() onSearchDatabase = new EventEmitter();
  @Output() onFilterText = new EventEmitter();

  searchStr: string; //ngModel

  onChange() {
    if(this.parent === 'search') {
      this.onSearchDatabase.emit(this.searchStr);
    }
    if( this.parent === 'favorites') {
      this.onFilterText.emit(this.searchStr);
    }   
  }
}
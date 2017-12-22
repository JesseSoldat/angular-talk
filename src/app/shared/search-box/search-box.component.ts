import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Input() placeholder: string;
  @Input() buttonText: string;
  @Input() showButton: boolean;
  @Output() onSearchDatabase = new EventEmitter();

  searchStr: string; //ngModel

  onChange() {
    this.onSearchDatabase.emit(this.searchStr);
  }
}
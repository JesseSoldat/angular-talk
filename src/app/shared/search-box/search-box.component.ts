import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements AfterViewInit {
  @Input() parent: string;
  @Input() placeholder: string;
  @Output() onSearchDatabase = new EventEmitter();
  @Output() onFilterText = new EventEmitter();
  @ViewChild('search') search: ElementRef;

  keyUps$;
  queries$;
  searchStr: string; //ngModel

  ngAfterViewInit() {
    this.keyUps$ = Observable.fromEvent<KeyboardEvent>(this.search.nativeElement, 'keyup');
    this.queries$ = this.keyUps$.map((e:any) => e.target.value)
      .do((value) => console.log(value))
      .distinctUntilChanged()
      .debounceTime(250);

    this.queries$.subscribe(query => {
      // console.log(query);
    })
  }

  onChange() {
    if(this.parent === 'search') {
      this.onSearchDatabase.emit(this.searchStr);
    }
    if( this.parent === 'favorites') {
      this.onFilterText.emit(this.searchStr);
    }   
  }

  
}
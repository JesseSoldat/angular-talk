import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements AfterViewInit, OnDestroy {
  @Input() parent: string;
  @Input() placeholder: string;
  @Output() onSearchDatabase = new EventEmitter();
  @Output() onFilterText = new EventEmitter();
  @ViewChild('search') search: ElementRef;
  queriesSubscription: Subscription;
  keyUps$: Observable<KeyboardEvent>;
  queries$: Observable<KeyboardEvent>;

  ngAfterViewInit() {
    this.keyUps$ = Observable.fromEvent(this.search.nativeElement, 'keyup');
    this.queries$ = this.keyUps$.map((e:any) => e.target.value)
      .distinctUntilChanged()
      .debounceTime(300);

    this.queriesSubscription = this.queries$.subscribe(query => {
      if (this.parent === 'search') {
        this.onSearchDatabase.emit(query);
      }
      if (this.parent === 'favorites') {
        this.onFilterText.emit(query);
      }   
    });
  }

  ngOnDestroy() {
    this.queriesSubscription.unsubscribe();
  }

 
}
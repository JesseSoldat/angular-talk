import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DataStoreService } from '../shared/data-store.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit() {
    this.subscription = this.dataStoreService.currentMovie.subscribe(movie => {
      console.log(movie);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
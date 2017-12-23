import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../shared/data-store.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
}) 
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie;
  subscription: Subscription;
  
  constructor(private dataStoreService: DataStoreService,
              private router: Router) {}

  ngOnInit() {
    this.subscription = this.dataStoreService.currentMovie.subscribe(movie => {
      if(movie === null) {
        this.movie = JSON.parse(localStorage.getItem('currentMovie'));
       if(this.movie === null) {
         this.movie = {};
         this.router.navigate(['search']);
       }
        return;
      }
      this.movie = movie;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
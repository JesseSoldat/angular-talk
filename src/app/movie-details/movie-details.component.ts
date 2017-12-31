import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataStoreService } from '../services/data-store.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
}) 
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie;
  subscription: Subscription;
  spinner = true;
  
  constructor(private dataStoreService: DataStoreService,
              private searchService: SearchService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {

    this.subscription = this.route.params
      .subscribe(params => {
        this.searchService.searchMovie(params.id)
          .subscribe(movie => {
            this.spinner = false;
            this.movie = movie;
            console.log(this.movie)
          });
      });

  }

  onNavigate(route) {
    this.router.navigate([route]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
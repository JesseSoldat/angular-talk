import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataStoreService } from '../shared/data-store.service';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
}) 
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie = {};
  subscription: Subscription;
  
  constructor(private dataStoreService: DataStoreService,
              private searchService: SearchService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {

    this.subscription = this.route.params
      .subscribe(params => {
        // console.log(params);
        this.searchService.searchMovie(params.id)
          .subscribe(movie => {
            this.movie = movie;
          });
      });

    

    // this.subscription = this.dataStoreService.currentMovie.subscribe(movie => {
    //   if(movie === null) {
    //     this.movie = JSON.parse(localStorage.getItem('currentMovie'));
    //    if(this.movie === null) {
    //      this.movie = {};
    //      this.router.navigate(['search']);
    //    }
    //     return;
    //   }
    //   this.movie = movie;
    // });
    // console.log(this.movie);
  }

  onNavigate(route) {
    this.router.navigate([route]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
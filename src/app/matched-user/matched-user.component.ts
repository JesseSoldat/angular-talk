import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataStoreService } from '../services/data-store.service';
import { FavoritesService } from '../services/favorites.service';
import { SearchService } from '../services/search.service';
import { Subscription } from 'rxjs/Subscription';
import Movie from '../models/movie';
import { getScroll } from '../shared/helper-functions';

@Component({
  selector: 'app-matched-user',
  templateUrl: './matched-user.component.html',
  styleUrls: ['./matched-user.component.scss']
})
export class MatchedUserComponent implements OnInit, OnDestroy {
  matchedIdsSubscription: Subscription;
  otherUserSubscription: Subscription;
  matchedUid: string;
  matchedName: string;
  unMatchedMovieIds: number[];
  unMatchedMovies: Movie[];

  heart = false;
 
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private dataStoreService: DataStoreService,
              private favoritesService: FavoritesService,
              private searchService: SearchService) { }

  ngOnInit() { 
    this.route.params.subscribe(params => {
      this.matchedUid = params['uid'];
      this.matchedName = params['name'];

      this.matchedIdsSubscription = this.dataStoreService.unMatchedMovieIds$.subscribe(movieIds => {
        this.unMatchedMovieIds = movieIds;
        this.getMatchedUsersMovies();
      });
    });
  }

  getMatchedUsersMovies() {
    this.otherUserSubscription = this.favoritesService.getOtherUserList(this.matchedUid)
      .subscribe(allMovies => {
        this.getUnMatchedMovies(allMovies);
      });
  }

  getUnMatchedMovies(allMovies: Movie[]) {
    this.unMatchedMovies = allMovies.filter(movie => {
      return this.unMatchedMovieIds.indexOf(movie.id) !== -1;
    });
  }

  onNavigate(route) {
    this.router.navigate([route]);
  }

  onAddToFavorites(id) {
    //get the detailed movie object first to save to firebase
    this.searchService.searchMovie(id).subscribe(movie => {
      this.favoritesService.addToFavorites(movie).then(key => {

        this.unMatchedMovies = this.unMatchedMovies.filter(m => m.id !== movie.id);

        this.unMatchedMovieIds = this.unMatchedMovieIds.filter(id=> id !== movie.id);

        this.dataStoreService.changeUnMatchedMovieIds(this.unMatchedMovieIds);
      });
    });
  }

  getMovieDetails(movie) {
    let position = getScroll(); //returns [x, y]
    this.dataStoreService.changeCurrentMovie(movie);
    this.dataStoreService.changeScrollPosition(position);
    this.dataStoreService.changeNavFrom('matched-user', this.matchedUid, this.matchedName);
    this.router.navigate(['/movie-details', { id: movie.id }]);
    // matched - user / Joe / yKma5vvXjkW8O7bC1QFSfNxghIH3
  }

  ngOnDestroy() {
    this.matchedIdsSubscription.unsubscribe();
    this.otherUserSubscription.unsubscribe();
  }
  
}
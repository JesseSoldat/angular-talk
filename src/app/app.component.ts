import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { routerTransitionTrigger } from './shared/animations/router.animation';
import { DataStoreService } from './services/data-store.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AnimationEvent } from '@angular/animations';

// import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransitionTrigger],
})
export class AppComponent implements OnInit {
  activeClass$: Observable<string>;
  navFrom: string;
  navTo: string;
  scrollPosition = [0, 0];
  routeRefs;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataStoreService: DataStoreService) {}
  
  ngOnInit() {
    this.dataStoreService.navFrom$.subscribe(navFrom => {
      this.navFrom = navFrom;
    });

    this.dataStoreService.scrollPosition$.subscribe(scrollPosition => {
      this.scrollPosition = scrollPosition;
    });

    this.activeClass$ = this.dataStoreService.activeClass$;
   

    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((obj: any) => {
        
        this.applyActiveClass(obj.url);
        
        //on arriving to the page the animation is not finished
        this.dataStoreService.changeRouterAnimationStatus(false);
        this.clearFavoritesCache(obj.url);   
    });
  }

  applyActiveClass(url) {
    // this.routeRefs = this.router.config.map(route => {
       // console.log(route.path);
    // });
    let link = url.split('/')[1];
    this.dataStoreService.changeActiveClass(link); 
  }

//    this.routesRef = this.router.config.map(route => {
//   let path = route.path.split(':')[0];
//   let lastChar = path.substr(path.length - 1);
//   if (lastChar === '/') {
//     path = path.slice(0, -1);
//   }
//   return path;
// }); 

  getState(outlet) {
    // console.log(outlet.activatedRouteData.state);
    //the route dashboard / search etc....
    return outlet.activatedRouteData.state;
  }

  clearFavoritesCache(url) {
    this.navTo = url;
    if (!(this.navTo.includes('favorites', 1) || this.navTo.includes('movie-details;', 1))) {
      // console.log('Wipe favorites state');
      this.dataStoreService.changeCurrentFavorites(null);
    }  
  }

  //listen for this animation to finish so that other components can start their animations
  routerTransitionDone(e: AnimationEvent) {
    this.dataStoreService.changeRouterAnimationStatus(true);  
    this.scrollToPosition();
  }

  scrollToPosition() {
    setTimeout(() => {
      if (this.navFrom === 'details') {
        setTimeout(() => {
          window.scrollTo({
            left: this.scrollPosition[0],
            top: this.scrollPosition[1],
            behavior: 'smooth'
          })
        }, 1);
        this.dataStoreService.changeNavFrom('');
        return;
      }
      window.scrollTo(0, 0); 
    }, 1)
    
  }
}

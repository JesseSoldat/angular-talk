import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataStoreService } from './services/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navFrom: string;
  navTo: string;
  scrollPosition = [0, 0];

  constructor(private router: Router,
              private dataStoreService: DataStoreService) {}
  
  ngOnInit() {
    this.dataStoreService.navFrom$.subscribe(navFrom => {
      this.navFrom = navFrom;
    });

    this.dataStoreService.scrollPosition$.subscribe(scrollPosition => {
      this.scrollPosition = scrollPosition;
    });
    
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((obj: any) => {
        this.navTo = obj.url;
        // console.log(this.navTo);
                         
        if (!(this.navTo.includes('favorites', 1) || this.navTo.includes('movie-details;', 1))) {
          // console.log('Wipe favorites state');
          this.dataStoreService.changeCurrentFavorites(null);
        }
        
        if(this.navFrom === 'details') {
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
      });
  }
}

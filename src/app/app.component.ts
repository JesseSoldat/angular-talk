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
      // console.log('navFrom', navFrom);
      this.navFrom = navFrom;
    });
    this.dataStoreService.scrollPosition$.subscribe(position => {
      this.scrollPosition = position;
    });
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((nav: any) => {

        if(this.navFrom === 'details') {
          setTimeout(() => {
            window.scrollTo({
              left: this.scrollPosition[0],
              top: this.scrollPosition[1],
              behavior: 'smooth'
            })
          }, 1);
          return;
        }

        window.scrollTo(0, 0);
        
        // if (nav.url.includes('details')) {
        //   console.log(nav.url);
          
        //   this.navFromDetails = true;
        // }
        // if(this.navFromDetails) {
        //   if (this.navFrom === 'favorites' || this.navFrom === 'search')
        //   return;
        // }
        // this.navFromDetails = false;
        // if (this.navFrom === 'search' && this.navFromDetails === true) {

        //   console.log(this.scrollPosition[0], this.scrollPosition[1]);
          
        //   window.scrollTo(this.scrollPosition[0], this.scrollPosition[1]);
        //   return;
        // }
        
        // window.scrollTo(0, 0);
      });
  }
}

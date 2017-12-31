import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navToDetails = false;

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((nav: any) => {
        if (nav.url.includes('details')) {
          this.navToDetails = true;
        }
        if(this.navToDetails) {
          if (nav.url.includes('search'))
          return;
        }
        window.scrollTo(0, 0);
      });
  }
}

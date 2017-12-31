import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matched-user',
  templateUrl: './matched-user.component.html',
  styleUrls: ['./matched-user.component.scss']
})
export class MatchedUserComponent {

  constructor(private router: Router) { }

  onNavigate(route) {
    this.router.navigate([route]);
  }
  
}
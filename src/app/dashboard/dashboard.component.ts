import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { hoverPanelTrigger } from './dashboard.animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ hoverPanelTrigger ]
})
export class DashboardComponent {
  hoverPanelState1 = 'default';
  hoverPanelState2 = 'default';
  hoverPanelState3 = 'default';
  

  constructor(private router: Router) {}

  onNavigate(route) {
    this.router.navigate([route]);
  }
  updateHover(num, hoverState) {
    switch (num) {
      case num = '1':
        this.hoverPanelState1 = hoverState;
        break;
      case num = '2':
        this.hoverPanelState2 = hoverState;
        break;
      case num = '3':
        this.hoverPanelState3 = hoverState;
        break;
    }
  }
}
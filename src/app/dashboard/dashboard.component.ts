import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { hoverPanelTrigger } from './dashboard.animations';
import { DataStoreService } from '../services/data-store.service';

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

  //Modal
  showModal = false;
  
  constructor(private router: Router,
              private dataStoreService: DataStoreService) {}

  onNavigate(route, e) {
    e.preventDefault();
    this.dataStoreService.clearAlert();
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

  onSearchUsersMovies() {
    this.dataStoreService.clearAlert();
    this.showModal = true;
  }

  onHideModal() {
    this.showModal = false;
  } 
}
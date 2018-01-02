import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataStoreService } from '../../services/data-store.service';
import Alert from '../../models/alert';
import { alertMessages } from '../../models/message.enum';
import { Subscription } from 'rxjs/Subscription';
import { capitalize } from '../../shared/helper-functions';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {
  alert: Alert;
  alertSubscription: Subscription;

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.alertSubscription = this.dataStoreService.alert$.subscribe(alert => {
      this.alert = alert;
    });

   
    this.dataStoreService.changeAlert({
      message: 'Test',
      style: alertMessages.success,
      type: 'success', 
    });
  }

  closeAlert() {
    this.dataStoreService.clearAlert();
  }

  capitalize(string) {
    return capitalize(string);
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }

}
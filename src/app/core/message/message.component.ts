import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataStoreService } from '../../services/data-store.service';
import Alert from '../../models/alert';
import { alertMessages } from '../../models/message.enum';
import { Subscription } from 'rxjs/Subscription';
import { capitalize } from '../../shared/helper-functions';
import { fadeinTrigger } from '../../shared/animations/fadein.animation';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [fadeinTrigger ]
})
export class MessageComponent implements OnInit {
  alert$: Observable<Alert>;

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.alert$ = this.dataStoreService.alert$;
  }

  closeAlert() {
    this.dataStoreService.clearAlert();
  }

  capitalize(string) {
    return capitalize(string);
  }

}
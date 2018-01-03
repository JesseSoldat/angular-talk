import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { enterTitleTrigger, enterImageTrigger } from './welcome.animations';
import { DataStoreService } from '../../services/data-store.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    enterTitleTrigger,
    enterImageTrigger
  ]
})
export class WelcomeComponent implements OnInit, OnDestroy {
  routerAnimationStatusSubscription: Subscription;
  titleState;
  imageState;

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
    
    this.routerAnimationStatusSubscription = this.dataStoreService.routerAnimationStatus$
      .subscribe(status => {
      if(status) {
        this.animateTitleImage();
      }
    }); 
  }

  animateTitleImage() {
    console.log('animate welcome');
    this.titleState = 'default';
    this.imageState = 'default';
  }

  ngOnDestroy() {
    this.routerAnimationStatusSubscription.unsubscribe();
  }

}
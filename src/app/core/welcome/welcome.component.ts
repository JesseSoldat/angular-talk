import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { enterTitleTrigger, hoverStateTrigger } from './welcome.animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    enterTitleTrigger,
    hoverStateTrigger
  ]
})
export class WelcomeComponent implements OnInit {
  titleState = 'default';
  imgState = 'default';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.titleState = 'enter';
    }, 200);
  }

}
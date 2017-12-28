import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { enterTitleTrigger, enterImageTrigger } from './welcome.animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    enterTitleTrigger,
    enterImageTrigger
  ]
})
export class WelcomeComponent implements OnInit {
  titleState = 'default';
  imageState = 'default';

  constructor() { }

  ngOnInit() {
  
  }

}
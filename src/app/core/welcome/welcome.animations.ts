import { trigger, state, style, transition, animate } from '@angular/animations';

export const enterTitleTrigger = trigger('enterTitle', [
  state('default', style({
    opacity: 1,
    fontSize: '300%'
  })),
  transition('* => default', animate('900ms ease-in'))
]);

export const enterImageTrigger = trigger('enterImage', [
  state('default', style({
    width: '90%',
    opacity: 1
  })),
  transition('* => default', animate('900ms ease-in')),
]);
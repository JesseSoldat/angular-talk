import { trigger, state, style, transition, animate } from '@angular/animations';

export const hoverStateTrigger = trigger('hoverState', [
  state('default', style({
    width: '90%',
    opacity: 1
  })),

  transition('* => default', animate(900)),
]);

export const enterTitleTrigger = trigger('enterTitle', [
  state('default', style({
    opacity: 0
  })),
  state('enter', style({
    opacity: 1,
    fontWeight: 'bold'
  })),
  transition('default => enter', animate(900))
])
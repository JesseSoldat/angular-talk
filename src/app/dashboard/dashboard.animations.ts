import { trigger, state, style, transition, animate } from '@angular/animations';

export const hoverBtnTrigger = trigger('hoverBtn', [
  state('default', style({
    transform: 'scale(1)'
  })),
  state('hover', style({
    transform: 'scale(1.05)'
    
  })),
  transition('default <=> hover', animate('300ms ease-in'))
]);

export const hoverPanelTrigger = trigger('hoverPanel', [
  state('default', style({
    backgroundColor: 'white',
    color: 'black'
  })),
  state('hover', style({
    backgroundColor: '#ccffef',
    color: 'black'
  })),
  transition('default <=> hover', animate('300ms ease-in'))
]);


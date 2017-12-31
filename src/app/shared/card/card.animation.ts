import { trigger, state, style, transition, animate } from '@angular/animations';

export const hoverImageTrigger = trigger('hoverImage', [
  state('default', style({
    transform: 'scale(1)'    
  })),
  state('hover', style({
    transform: 'scale(1.02)'    
  })),
  transition('default <=> hover', animate(300))
]);

export const clickButtonTrigger = trigger('clickButton', [
  state('default', style({
  })),
  state('hover', style({
  })),
  transition('default <=> hover', [
    animate('300ms ease-in', style({
      transform: 'scale(1.05)'
    })),
    animate('300ms ease-out')
  ])
]);
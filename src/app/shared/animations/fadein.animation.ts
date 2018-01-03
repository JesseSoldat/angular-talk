import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeinTrigger = trigger('fadein', [
  transition('void => *', [
    style({
      opacity: 0
    }),
    animate('900ms ease-in', style({
      opacity: 1
    })),
    animate('900ms ease-in')
  ]),
  transition('* => void', [
    style({
      opacity: 1
    }),
    animate('900ms ease-out', style({
      opacity: 0
    })),

  ])
]);

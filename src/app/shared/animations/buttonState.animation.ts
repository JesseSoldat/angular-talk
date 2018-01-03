import { trigger, group, state, style, transition, animate } from '@angular/animations';

const VALID = '#1A242F';
const INVALID = '#2c3e50';

export const buttonStateTrigger = trigger('buttonState', [
  state('valid', style({
    backgroundColor: VALID
  })),
  state('invalid', style({
    backgroundColor: INVALID
  })),
  transition('invalid => valid', [
    group([
      animate(200, style({
        transform: 'scale(1.1)'
      })),
      animate(300, style({
        backgroundColor: VALID
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ]),
  transition('valid => invalid', [
    group([
      animate(200, style({
        transform: 'scale(1.1)'
      })),
      animate(300, style({
        backgroundColor: INVALID
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ])
]); 
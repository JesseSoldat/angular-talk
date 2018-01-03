import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerTransitionTrigger = trigger('routerTransition', [
  transition('* <=> *', [
  //query command to select both the new route component and the leaving one
   query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
      //fixed The element is positioned relative to the browser window

    //inner animations run in parallel.
    //router outlet is a child of the div with the @routerTransition
    //we can query the :enter and :leave states of child elements
    group([ 
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s linear', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      //optional avoid errors if our queries return empty results

      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s linear', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ]),
  ])
])

//DOES NOT LOOK GOOD
// export const routerFadeTransitionTrigger = trigger('routerFadeTransition', [
//   transition('* <=> *', [

//     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
//       , { optional: true }),

//     group([
//       query(':enter', [
//         style({ opacity: 0 }),
//         animate('0.5s', style({ opacity: 1 }))
//       ], { optional: true }),

//       query(':leave', [
//         style({ opacity: 1 }),
//         animate('0.5s', style({ opacity: 0 }))
//       ], { optional: true }),
//     ]),
//   ])
// ])

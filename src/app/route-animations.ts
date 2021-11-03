import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';


// export const fader = trigger('routeAnim', [
//     transition('* => *', [
//       style({
//       //  position: 'relative',
//       }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0,
//        transform: 'scale(0) translateY(100%)',
//           width: '100%',
//           height: '100%'
//         })
//       ], { optional: true }),

//       group([
//         query(' :enter', [
//           style({
//             opacity: 0,
//           }),
//           animate('1000ms ease', style({
//             opacity: 1,
//             transform: 'scale(1)'
//           }))
//         ], { optional: true }),

//         query(':leave', [
//           style({
//             opacity: 1,
//           }),
//           animate('1000ms ease', style({
//             opacity: 0
//           }))
//         ], { optional: true }),
//       ]),
//     ])
//   ])


export const fader =
  trigger('routeAnim', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(-100%)',
        }),
      ]),
      query(':enter', [
        animate('100ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ]),
      query(':leave', [
        style({
          opacity: 1,
        }),
        animate('100ms ease', style({ opacity: 1, transform: 'scale(1) translateY(100%)' })),
      ], { optional: true }),
    ]),
  ]);


// export const slider =
//   trigger('routeAnim', [
//     transition('* => isLeft', slideTo('left') ),
//     transition('* => isRight', slideTo('right') ),
//     transition('isRight => *', slideTo('left') ),
//     transition('isLeft => *', slideTo('right') )
//   ]);



//   function slideTo(direction) {
//     const optional = { optional: true };
//     return [
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           [direction]: 0,
//           width: '100%'
//         })
//       ], optional),
//       query(':enter', [
//         style({ [direction]: '-100%'})
//       ]),
//       group([
//         query(':leave', [
//           animate('600ms ease', style({ [direction]: '100%'}))
//         ], optional),
//         query(':enter', [
//           animate('600ms ease', style({ [direction]: '0%'}))
//         ])
//       ]),
//     ];
//   }

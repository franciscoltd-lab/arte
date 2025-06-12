import { trigger, transition, style, animate } from '@angular/animations';

export const cardTransitionAnimation = trigger('cardTransition', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.95) rotateY(90deg)' }),
    animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1) rotateY(0deg)' }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.95) rotateY(-90deg)' }))
  ])
]);

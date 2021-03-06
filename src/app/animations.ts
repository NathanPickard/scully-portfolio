import { trigger, transition, style, query, animate, animateChild, group, stagger } from '@angular/animations';

export const pageAnimation =

  trigger('pageAnimations', [
    transition(':enter', [
        style({opacity: 0, transform: 'translateY(-100px)'}),
        stagger(-30, [
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
        ])
      ])
    ]);

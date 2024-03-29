import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const addRemoveProject = trigger('deleteProject', [
  state('start', style({ opacity: 1 })),
  state('end', style({ opacity: 1 })),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('300ms', style({ opacity: 0 })),
  ]),
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 })),
  ]),
]);

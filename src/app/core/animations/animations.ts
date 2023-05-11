import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

export const animations = {

fadeHeightLeaveAnimation: trigger('fadeHeightLeaveAnimation', 
[
  transition(':leave', [
    style({ height: '*', opacity: 1, overflow: 'hidden' }), // initial
    animate( '{{duration}}s ease-in-out',
      style({ height: 0, opacity: 0, overflow: 'hidden' })
    ), // final
  ], { params: { duration: '0.2' } })
]),

};
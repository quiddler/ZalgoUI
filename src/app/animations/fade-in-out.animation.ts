import { trigger, state, animate, style, transition } from '@angular/core';

export class Fader {

    public static fadeInOut(): any {
        return trigger('visibilityChanged', [
            state('true',  style({ opacity: 1, transform: 'scale(1.0)' })),
            state('false', style({ opacity: 0, transform: 'scale(0.0)' })),
            transition('1 => 0', [
                style({ opacity: 1, transform: 'scale(1.0)' }),
                animate('0.3s ease-in-out', style({ transform: 'scale(0.0)', opacity: 0 }))
            ]),
            transition('0 => 1', [
                style({ opacity: 0, transform: 'scale(0.0)' }),
                animate('0.3s ease-in-out', style({ transform: 'scale(1.0)', opacity: 1 }))
            ])
        ]);
    }
}
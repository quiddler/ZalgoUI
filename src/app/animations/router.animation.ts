import { trigger, state, animate, style, transition } from '@angular/core';

export class Animator {

    public static slideLeft(): any {
        return trigger('routerTransition', [
            state('void', style({ transform: 'translateX(100%)', opacity: 0, position: "absolute" })),
            state('*', style({ transform: 'translateX(0%)', opacity: 1, position: "absolute" })),
            transition(':enter', [
                
                animate('0.5s ease-in-out', style({opacity: 1, position: "relative"}))
            ]),
            transition(':leave', [
                
                animate('0.5s ease-in-out', style({opacity: 0, position: "relative"}))
            ])
        ]);
    }

    public static slideRight(): any {
        return trigger('routerTransition', [
            state('void', style({ position: 'relative', width: '100%' })),
            state('*', style({ position: 'relative', width: '100%' })),
            transition(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ]),
            transition(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
            ])
        ]);
    }

    public static slideTop(): any {
        return trigger('routerTransition', [
            state('void', style({ position: 'absolute', width: '100%', height: '100%' })),
            state('*', style({ position: 'absolute', width: '100%', height: '100%' })),
            transition(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(0%)', position: "relative" }))
            ]),
            transition(':leave', [
                style({ transform: 'translateY(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(100%)', position: "relative" }))
            ])
        ]);
    }

    public static slideBottom(): any {
        return trigger('routerTransition', [
            state('void', style({ position: 'absolute', width: '100%', height: '100%' })),
            state('*', style({ position: 'absolute', width: '100%', height: '100%' })),
            transition(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(0%)', position: "relative" }))
            ]),
            transition(':leave', [
                style({ transform: 'translateY(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)', position: "relative" }))
            ])
        ]);
    }

    public static fadeInOut(): any {
        return trigger('visibilityChanged', [
            state('void', style({ position: 'absolute' })),
            state('*', style({ position: 'absolute' })),
            transition(':enter', [
                style({ opacity: 0 }),
                animate('0.5s ease-in-out', style({ position: "relative", opacity: 1 }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('0.5s ease-in-out', style({ position: "relative", opacity: 0 }))
            ])
        ]);
    }
}
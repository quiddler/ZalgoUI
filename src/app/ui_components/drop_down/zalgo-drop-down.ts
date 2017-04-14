import { Component, Input, HostListener } from "@angular/core";

@Component({
    moduleId:     module.id,
    selector:    'zalgo-drop-down',
    templateUrl: './zalgo-drop-down.html',
    styleUrls:  ['./zalgo-drop-down.css']
})

export class ZalgoDropDown {

    @Input() open: boolean;

    constructor() { }

    @HostListener('window:click', ['$event'])
    onClick(event: Event): void {

        console.log('window click occurred');

        let elem: Element = event.target as Element;

        if (!elem.matches('.zalgo-dropdown')) {

            var dropdowns: HTMLCollection = document.getElementsByClassName("dropdown-content");

            for (let i: number = 0, j: number = dropdowns.length; i < j; i++) {

                var dropdown: Element = dropdowns[i];

                if (dropdown.classList.contains('zalgo-show')) {
                    dropdown.classList.remove('zalgo-show');
                }
            }
        }
        event.stopPropagation();
    }
}
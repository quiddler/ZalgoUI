import { Component, Input, HostListener } from "@angular/core";

@Component({
    moduleId:     module.id,
    selector:    'zalgo-drop-down',
    templateUrl: 'drop-down.html',
    styleUrls:  ['drop-down.scss']
})

export class ZalgoDropDown {

    @Input() open;

    constructor() { }

    @HostListener('window:click', ['$event'])
    onClick(event: Event): void {

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

    toggleHidden(event: Event): void {
        
        let elem: Element = event.target as Element;

        elem.classList.toggle("zalgo-show");
    }
}
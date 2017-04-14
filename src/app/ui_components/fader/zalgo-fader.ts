import { Component, Input } from "@angular/core";
import { Fader } from "../../animations/fade-in-out.animation";

@Component({
    moduleId: module.id,
    selector: 'zalgo-fader',
    styleUrls: ['../header/header.css'],
    animations: [Fader.fadeInOut()],
    template: `
        <div [@visibilityChanged]="isVisible" class="res-hero">
            <ng-content></ng-content>
        </div>
    `
})
export class ZalgoFader {

    @Input() isVisible: boolean = true;
}
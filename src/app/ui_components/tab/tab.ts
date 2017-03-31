import { Component, Input } from "@angular/core";
import { fader } from "../animations/fade-in-out.animation";

@Component({
    selector: "zalgo-tab",
    animations: [fader()],
    //styleUrls: ['./zalgo-tab.component.scss'],
    template: `
        <div class="full-width" [@visibilityChanged]="!disabled" >
            <ng-content class="full-width" *ngIf="!disabled"></ng-content>
        </div>
    `
})

export class ZalgoTab {

    @Input() title: string = "Not Set";

    // disabled
    private _disabled: boolean = true;
    get disabled() { return this._disabled; }
    set disabled(value: boolean) { this._disabled = value; }
}
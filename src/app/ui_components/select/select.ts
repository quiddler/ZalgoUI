import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "res-select",
    template: `
        <label class="form-label">{{title}}</label>
        <div class="custom_dropdown full-width">
            <select class="full-width" required="required" [disabled]="disabled">

                <option *ngFor="let option of options; let i = index;" 
                        value="{{option}}"
                        [selected]="i === selectedIndex ? true : false"
                        (click)="selected($event, i)">{{option}}</option>
            </select>
        </div>
    `
})

export class ResSelect {

    @Input() title: string;
    @Input() disabled: boolean = false;
    @Input() options: string[];
    @Input() selectedIndex: number = 0;

    @Output() change: EventEmitter<any> = new EventEmitter();

    selected(event: Event, newIndex: number): void {
        event.stopPropagation();
        this.selectedIndex = newIndex;
        this.change.emit(this.options[this.selectedIndex]);
    }
}


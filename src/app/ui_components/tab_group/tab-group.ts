import { Component, Input, ContentChildren, QueryList, AfterViewInit } from "@angular/core";
import { ZalgoTab } from "../tab/tab";

@Component({
    selector: "zalgo-tab-group",
    //styleUrls: ['./zalgo-tab-group.scss'],
    template: `
        <section class="sub-section full-width">
            <ul class="select_visible full-width">

                <li class="select_visible-option"
                    *ngFor="let title of titles; let i = index; let l = last; let f = first;"
                    [ngClass]="{ 'selected' : tabIsSelected(i) }" 
                    [ngStyle]="{ 'border-right' : setBorderRight(l), 'border-left' : setBorderLeft(f), 'border-top' : 'none' }"
                    (click)="displayTab($event, i)">{{title}}</li>
            </ul>
            <section class="full-width">
                <ng-content></ng-content>
            </section>
        </section>
    `
})

export class ZalgoTabGroup implements AfterViewInit {

    @Input() selectedIndex: number = 0;

    @ContentChildren(ZalgoTab) tabElements: QueryList<ZalgoTab>;

    isVisible: boolean = false;

    // ready
    private _ready: boolean = false;
    get ready(): boolean { return this._ready; }
    set ready(value: boolean) { this._ready = value; }

    // currentIndex
    private _currentIndex: number = null;
    get currentIndex(): number { return this._currentIndex; }
    set currentIndex(value: number) { this._currentIndex = value; }

    // tabs
    private _tabs: ZalgoTab[] = null;
    get tabs(): ZalgoTab[] { return this._tabs; }
    set tabs(value: ZalgoTab[]) { this._tabs = value; }

    // tab titles
    private _titles: string[] = null;
    get titles(): string[] { return this._titles; }
    set titles(value: string[]) { this._titles = value; }

    ngAfterViewInit(): void {
        this.currentIndex = this.selectedIndex;
        this.tabs = this.tabElements.toArray();
        this.tabs[this.currentIndex].disabled = false;
        this.titles = this.tabs.map(tab => tab.title);
        this.ready = true;
        this.isVisible = true;
    }

    displayTab(event: Event, index: number) {
        if (index !== this.currentIndex) {
            this.tabs[this.currentIndex].disabled = true;
            this.currentIndex = index;
            this.tabs[this.currentIndex].disabled = false;
            this.isVisible = false;
            setTimeout(() => this.isVisible = true, 300);
        }
        event.stopPropagation();
    }

    tabIsSelected(index: number): boolean {
        return index === this.currentIndex;
    }

    setBorderLeft(firstElement: boolean): string {
        
        if (firstElement) return "none";
        return "solid 2px #ccc";
    }

    setBorderRight(lastElement: boolean): string {
        if (lastElement) return "none";
        return "solid 2px #ccc";
    }
}
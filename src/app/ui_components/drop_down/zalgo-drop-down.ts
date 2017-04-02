import { Component, AfterViewInit, OnDestroy, Input, ViewChild, HostListener } from "@angular/core";
import { ResBus } from "../../bus/bus.service";
import { ResAnimator } from "../../animations/res-animator";

@Component({
    moduleId:     module.id,
    selector:    'zalgo-drop-down',
    templateUrl: 'drop-down.html',
    styleUrls:  ['drop-down.scss']
})

export class ZalgoDropDown implements AfterViewInit, OnDestroy {

    @Input() links;
    @Input() appName;

    @ViewChild("resHeader") header;
    @ViewChild("resHero") hero;

    constructor(private bus: ResBus) {
        this.registerPageLoad();
    }

    registerPageLoad() {
        this.pageLoadToken = this.bus.on("page-load", (pageInfo) => {
            this.toggleHeroText(pageInfo.heroTitle, pageInfo.heroTagline);
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setOffset();
    }

    @HostListener('window:scroll', ['$event'])
    onscroll(event) {
        this.navIsSticky = window.scrollY >= this.offset ? true : false;
    }
}
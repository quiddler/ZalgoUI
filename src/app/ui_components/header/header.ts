import { Component, AfterViewInit, OnDestroy, Input, ViewChild, HostListener } from "@angular/core";
import { ZalgoBus } from "../../bus/bus.service";
import { ZalgoAnimator } from "../../animations/zalgo-animator";

@Component({
    moduleId:     module.id,
    selector:    'zalgo-header',
    templateUrl: './header.html',
    styleUrls:  ['./header.css']
})

export class ZalgoHeaderComponent implements AfterViewInit, OnDestroy {

    public offset:            number;
    public navIsSticky:       boolean = false;
    public menuIsOpen:        boolean = false;
    public visible:           boolean = true;
    public heroTitle:         string  = "";
    public heroTagline:       string  = "";

    private pageLoadToken:    number;

    @Input() links;
    @Input() appName;

    @ViewChild("zalgoHeader") header;
    @ViewChild("zalgoHero") hero;

    constructor(private bus: ZalgoBus) {
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

    ngAfterViewInit() {
        this.setOffset();        
    }

    ngOnDestroy() {
        this.bus.off(this.pageLoadToken);
    }

    setOffset() {
        this.offset = this.hero.nativeElement.clientHeight
                    - this.header.nativeElement.clientHeight;
    }

    toggleMenu() {
        this.menuIsOpen = !this.menuIsOpen;
    }

    toggleHeroText(title: string, tagline: string) {
        this.visible = false;
        setTimeout(() => {
            this.heroTitle = title;
            this.heroTagline = tagline;
            this.visible = true;
        }, 400);
    }

    scrollToTopOfPage(event) {
        let animator = new ZalgoAnimator();
        animator.scrollToTop(() => console.log("scroll to top animation complete... something, something... complete..."));
        if(event) event.preventDefault();
    }

    setCurrentRoute(index) {
        this.menuIsOpen = false;
    }
}
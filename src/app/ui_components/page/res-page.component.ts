import { Component, OnInit, AfterViewInit, OnDestroy, Input } from "@angular/core";
import { ResBus } from "../bus/bus.service";
import { ResCache } from "../cache/cache.service";
import { ResAnimator } from "../animations/res-animator";

@Component({
    selector: "res-page",
    template: `
        <div class="container less-bottommy">
            <main id="content" class="contain">
                <div class="lowered">
                    <ng-content></ng-content>
                </div>
            </main>
        </div>
        <res-footer></res-footer>
    `,
})

export class ResPageComponent implements OnInit, AfterViewInit, OnDestroy {
    
    @Input() heroTitle: string = "";
    @Input() heroTagline: string = "";
    @Input() pageId: string = "";

    private scrollKeyPostfix: string = "-scroll-position";
    private scrollKey: string = "";
    private scrollToken: number;
    private scrollPosition: any = null;

    constructor(private bus: ResBus, private cache: ResCache) {}

    ngOnInit() {
        window.scrollTo(0, 0);
    }

    ngAfterViewInit() {

        this.scrollKey = this.pageId + this.scrollKeyPostfix;

        this.scrollPosition = this.cache.getCached(this.scrollKey);

        this.scrollToken = this.bus.on("dependencies-resolved", () => {

            if (this.scrollPosition !== null) {
                setTimeout(() => {
                    let animator = new ResAnimator();
                    animator.scrollToPosition(this.scrollPosition.y, () => {
                        this.bus.emit("scroll-finished", window.scrollY);
                    });
                });                
            }
        });

        this.bus.emit("page-load", {
            heroTitle:   this.heroTitle,
            heroTagline: this.heroTagline
        });
    }

    ngOnDestroy() {
        this.cache.setCached(this.scrollKey, {
            x: window.scrollX,
            y: window.scrollY
        });

        this.bus.off(this.scrollToken);
    }
}
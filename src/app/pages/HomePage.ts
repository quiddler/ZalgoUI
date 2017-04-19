import { Component, enableProdMode, OnDestroy } from "@angular/core";
import { Animator } from '../animations/router.animation'

enableProdMode();

@Component({
    moduleId: module.id,
    template: `
    	<zalgo-page style="height:100vh;" [heroTitle]='"Home"' [heroTagline]='"Your stepping stone to nowhere"' [pageId]='"homepage"'>
            <zalgo-card [title]="'UI Components'" [dependencyStatus]="'success'">                
                <section class="res-info">
                    <h5 class="section-header">{{msg}}</h5>
                    <h3>Drop Down Component</h3>
                </section>
            </zalgo-card>
        </zalgo-page>
    `,
    animations: [Animator.slideRight()],
    host: { '[@routerTransition]': '' }
})
export class HomePage {

    public msg: string = "home page";

    constructor() { }
}

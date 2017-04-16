import { Component, enableProdMode, OnDestroy } from "@angular/core";
import { Animator } from '../animations/router.animation'

enableProdMode();

@Component({
    moduleId: module.id,
    template: `
    	<zalgo-page style="height:100vh;" [heroTitle]='"Search"' [heroTagline]='"If youre hoping to find your self... you wont"' [pageId]='"searchpage"'>
        	<zalgo-card [title]="'UI Components'" [dependencyStatus]="'success'">                
                <section class="res-info">
                    <h5 class="section-header">{{msg}}</h5>
                    <h3>Search Page</h3>
                </section>
            </zalgo-card>
        </zalgo-page>
    `,
    animations: [new Animator().slideLeft()],
    host: { '[@routerTransition]': '' }
})
export class SearchPage {

    public msg: string = "search page";

    constructor() { }
}

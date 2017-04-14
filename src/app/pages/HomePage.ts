import { Component, enableProdMode, OnDestroy } from "@angular/core";
import { Animator } from '../animations/router.animation'

enableProdMode();

@Component({
    moduleId: module.id,
    template: `
    	<zalgo-page style="height:100vh;" [heroTitle]='"Home"' [heroTagline]='"Your stepping stone to nowhere"' [pageId]='"homepage"'>
        	<h3>{{msg}}</h3>
        </zalgo-page>
    `,
    animations: [new Animator().slideLeft()],
    host: { '[@routerTransition]': '' }
})
export class HomePage {

    public msg: string = "home page";

    constructor() { }
}

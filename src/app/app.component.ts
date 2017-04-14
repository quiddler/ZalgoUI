import { Component, enableProdMode, OnDestroy } from "@angular/core";
import { ZalgoBus } from "./bus/bus.service";
import { ZalgoCache } from "./cache/cache.service";

enableProdMode();

@Component({
    moduleId: module.id,
    selector: "app",
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnDestroy {

    public nameOfApp: string = "Zalgo";

    public navbarLinks = [
    	{ name: "Home", url: "/" },
        { name: "Search", url: "/search" },
        { name: "Logout", url: "/logout" }
    ];

    // the references to the services below should keep them from being garbage collected
    // - i.e., they will exist during the entire lifetime of the app
    constructor(private bus: ZalgoBus, private cache: ZalgoCache) { }

    ngOnDestroy() {
        // this.cache.cleanse(); // uncomment to disable localStorage's persistance between sessions
    }
}
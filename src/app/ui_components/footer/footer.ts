import { Component } from "@angular/core";

@Component({
    selector: "zalgo-footer",
    template: `
        <footer class="footer full-width relative-important">
            <img class="ksu-logo" src= "assets/images/ksu_black.png" alt= "Kent State University" />
            <p class="copywrite">&copy; Residential Technologies 2016</p>
        </footer>
    `,
})

export class ZalgoFooterComponent { }
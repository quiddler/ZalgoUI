import { Component } from "@angular/core";

@Component({
    selector: "zalgo-footer",
    template: `
        <footer class="full-width relative-important" 
        		style="background-image: url('assets/images/scary-forest.jpg'); margin:0px; padding:0px; height:350px;">
        	<div class="full-width" style="display: table; text-align:center; height:350px;">
        		<div class="full-width" style="display: table-cell; vertical-align: middle; height:350px;">
            		<p style="margin:0px; width:100%; color:white;">&copy; Zalgo Solutions 2017</p>
            	</div>
            </div>
        </footer>
    `,
})

export class ZalgoFooterComponent { }
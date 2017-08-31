import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  	selector: 'zalgo-off-canvas-menu',
  	templateUrl: './zalgo-off-canvas-menu.component.html',
  	styleUrls: ['./zalgo-off-canvas-menu.component.scss']
})
export class ZalgoOffCanvasMenuComponent implements OnInit {

	public overlayOpacity: string = "0";
	public overlayDisplay: string = "none";
    @ViewChild("zalgoSidenav") nav;
  	constructor() { }

  	ngOnInit() {
  	}

  	/* 
  		Set the width of the side navigation to 250px 
  		and the left margin of the page content to 250px 
  	   	and add a black background color to body 
  	*/
	openNav() {
	    this.nav.nativeElement.style.width = "250px";
	    //document.getElementById("main").style.marginLeft = "250px";
	    this.overlayDisplay = "block";
	    this.overlayOpacity = "0.5";
	}

	/* 
		Set the width of the side navigation to 0 
		and the left margin of the page content to 0, 
		and the background color of body to white 
	*/
	closeNav() {
	    this.nav.nativeElement.style.width = "0";
	    //document.getElementById("main").style.marginLeft = "0";
	    var self = this;
	   	setTimeout( () => { self.overlayDisplay = "none"; }, 500);
	    this.overlayOpacity = "0";
	}
}

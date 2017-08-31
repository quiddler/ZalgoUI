import { Component, OnInit, Input, HostListener, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'zalgo-dropdown-tc',
  templateUrl: './zalgo-dropdown-tc.component.html',
  styleUrls: ['./zalgo-dropdown-tc.component.scss']
})
export class ZalgoDropdownTcComponent implements OnInit {

  @Input() title: string = "";
  @Input() side: string = "";

  public displayClass: string = "";
  public sideClass: string;

  constructor() {  }

  ngOnInit() {
    var self = this;
    setTimeout( () => { self.handleSide() }, 0);
    
  }

  handleSide() {
    switch (this.side) {
      case "top":
        this.sideClass = "zalgo-top";
        break;
      case "bottom":
        this.sideClass = "zalgo-bottom";
        break;
      case "left":
        this.sideClass = "zalgo-left";
        break;
      case "right":
        this.sideClass = "zalgo-right";
        break;
      default:
        this.sideClass = "zalgo-bottom";
        break;
    }
  }

  @HostListener('window:click', ['$event']) 
  globalClickHandler(event: Event) {
    this.displayClass = "";
    event.stopPropagation();
  };

  public toggle(event: Event) {
    this.displayClass = this.displayClass === "zalgo-show" ? "" : "zalgo-show"
    event.stopPropagation();
  }

}

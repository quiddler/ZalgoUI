import { Component, OnInit, Input, HostListener, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ZalgoLink } from '../../models/link';

@Component({
  selector: 'zalgo-dropdown-fs',
  templateUrl: './dropdown-fs.component.html',
  styleUrls: ['./dropdown-fs.component.scss']
})
export class ZalgoDropdownFsComponent implements OnInit {

  @Input() links: any[];
  @Input() title: string = "";

  @ViewChildren('zalgo-drop-down') dropdowns: QueryList<ElementRef>;

  public displayClass: string = "";
  public dropped: boolean = false;

  constructor() { 
  	this.links = new Array<any>();
  }

  ngOnInit() {
  }

  @HostListener('window:click', ['$event']) 
  globalClickHandler(event: Event) {
  	event.stopPropagation();
    if (this.dropped) {
      this.displayClass = "";
      this.dropped = false;
    }
  };

  public toggle(event: Event) {
    if (this.dropped) {
      this.displayClass = "";
      this.dropped = false;
    } else {
      this.displayClass = "zalgo-show";
      this.dropped = true;
    }
    event.stopPropagation();
  }
}

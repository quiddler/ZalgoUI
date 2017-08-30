import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'zalgo-accordion',
  templateUrl: './zalgo-accordion.component.html',
  styleUrls: ['./zalgo-accordion.component.scss']
})
export class ZalgoAccordionComponent implements OnInit {

  @Input() title: string;

  toggle(event: Event) {
  	this.elementRef.nativeElement.firstElementChild.classList.toggle('zalgo-active');
  	this.setAccordionHeight();
  }

  @HostListener('window:resize', ['$event']) onResize(event: Event) {
  	this.setAccordionHeight(true);
  }

  constructor(public elementRef: ElementRef) { }

  ngOnInit() {
  }

  setAccordionHeight(windowIsResizing?: boolean): void {
  	var panel = this.elementRef.nativeElement.lastElementChild;
    if (panel.style.maxHeight && !windowIsResizing){
      	panel.style.maxHeight = null;
    } else if (!panel.style.maxHeight && windowIsResizing){
    	;
    } else if (panel.style.maxHeight && windowIsResizing){
    	panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      	panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}

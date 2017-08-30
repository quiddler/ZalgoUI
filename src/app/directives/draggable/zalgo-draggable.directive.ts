import { Directive, HostListener, Input, ElementRef, OnInit } from '@angular/core';
import { copy } from "../../util/copy";

"use strict";

@Directive({
  selector: '[zalgoDraggable]'
})
export class ZalgoDraggableDirective implements OnInit {

  public origPos: any;
  public copy: ElementRef;

  private deltaDrag: number = 0;
  private dragging: boolean = false;
  private tempXoffset: number = 0;
  private tempYoffset: number = 0;
  
  constructor(private el: ElementRef) { }

  ngOnInit() {
  	this.origPos = this.el.nativeElement.getBoundingClientRect();
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
  	event.stopPropagation();
  	let pos = this.el.nativeElement.getBoundingClientRect();
  	this.dragging = true;
  	this.copy = copy(this.el, {});
  	
  	this.tempXoffset = pos.left - event.pageX;
  	this.tempYoffset = pos.top  - event.pageY;

  	let eventDoc = (event.target && (event.target as Element).ownerDocument) || document;
    let doc = eventDoc.documentElement;
    let body = eventDoc.body;

  	this.copy.nativeElement.style.height = pos.height + "px";
  	this.copy.nativeElement.style.top = pos.top + body.scrollTop + "px";
  	this.copy.nativeElement.style.width = pos.width + "px";
  	this.copy.nativeElement.style.left = pos.left + body.scrollLeft + "px";
  	this.copy.nativeElement.style.zIndex = "1000";
  	this.copy.nativeElement.style.position = "absolute";
  	this.copy.nativeElement.style.backgroundColor = "red";
  	
  	document.body.appendChild(this.copy.nativeElement);
  }

  @HostListener('window:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
  	if (this.dragging) {
	  	event.preventDefault();

		let eventDoc = (event.target && (event.target as Element).ownerDocument) || document;
	    let doc = eventDoc.documentElement;
	    let body = eventDoc.body;

	    let pageX = event.clientX +
	      (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
	      (doc && doc.clientLeft || body && body.clientLeft || 0);
	    let pageY = event.clientY +
	      (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
	      (doc && doc.clientTop  || body && body.clientTop  || 0 );

		this.deltaDrag++;

		if (this.deltaDrag > 5) {
			this.copy.nativeElement.style.opacity = "0.6";
			this.copy.nativeElement.style.top = pageY + this.tempYoffset + body.scrollTop + "px";
			this.copy.nativeElement.style.left = pageX + this.tempXoffset + body.scrollLeft + "px";
		}
	}
  }

  @HostListener('window:mouseup', ['$event']) onMouseUp(event: MouseEvent) {
  	if (this.dragging) {
	  	event.stopPropagation();
	  	this.dragging = false;
	  	document.body.removeChild(this.copy.nativeElement);
	}
  }










  @HostListener('touchstart', ['$event']) onTouchStart() {
    console.log('touch start occurred');
  }

  @HostListener('touchmove', ['$event']) onTouchMove() {
    console.log('touch move occurred');
  }

  @HostListener('touchend', ['$event']) onTouchEnd() {
    console.log('touch end occurred');
  }

  @HostListener('touchcancel', ['$event']) onTouchCancel() {
    console.log('touch cancel occurred');
  }

}

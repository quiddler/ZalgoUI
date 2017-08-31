import { ElementRef } from '@angular/core';
import { Point } from "../models/point";

export class ZalgoBaseElement {

	constructor(public elementRef: ElementRef) {}

	getScreenLocation(): Point {
		let rect = this.elementRef.nativeElement.getBoundingClientRect();
		return {
			x: rect.left + document.body.scrollLeft,
			y: rect.top  + document.body.scrollTop
		}
	}
}
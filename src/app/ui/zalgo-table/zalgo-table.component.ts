import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zalgo-table',
  templateUrl: './zalgo-table.component.html',
  styleUrls: ['./zalgo-table.component.scss']
})
export class ZalgoTableComponent implements OnInit {

  @Input() objs: any[];
  @Input() tableClass: string;
  @Input() exclude: string[] = new Array<string>();
  public keys: string[];

  constructor() { }

  ngOnInit() {
  	this.keys = Object.keys(this.objs[0]);
  }

  getKeys() {
  	return this.keys;
  }

  getValues(obj) {
  	let result = [];
  	for (let k of this.keys) {
  		if (this.exclude.indexOf(k) === -1) {
  			result.push(obj[k])
  		}
  	}
  	return result;
  }
}

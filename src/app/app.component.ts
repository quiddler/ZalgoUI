import { Component } from '@angular/core';
import { ZalgoLink } from './models/link';
import { ZalgoLinkContainer } from './models/link-container';

@Component({
  selector: 'zalgo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Zalgo LLC';
  public links: any[];

  items: any[] = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
      { a: 7, b: 8, c: 9 },
      { a: 10, b: 11, c: 12 },
  ];

  constructor() {

  	let x = new ZalgoLinkContainer('Dirname 1', [
  		new ZalgoLink('Item 5', '#'),
  		new ZalgoLink('Item 6', '#'),
  		new ZalgoLink('Item 7', '#')
  	]);

  	this.links = [
  		new ZalgoLink('Item 1', '#'),
  		new ZalgoLink('Item 2', '#'),
  		new ZalgoLink('Item 3', '#'),
  		new ZalgoLink('Item 4', '#'),
  		x
  	];


  }

  
}

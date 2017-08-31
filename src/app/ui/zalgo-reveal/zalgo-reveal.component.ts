import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zalgo-reveal',
  templateUrl: './zalgo-reveal.component.html',
  styleUrls: ['./zalgo-reveal.component.scss']
})
export class ZalgoRevealComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleModal() {
  	let modal = document.getElementById("modal");
  	let overlay = document.getElementById("modalOverlay")
  	modal.style.display = modal.style.display === "block" ? "none" : "block";
  	overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  }
}

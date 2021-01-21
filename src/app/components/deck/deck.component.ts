import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  title = 'deck';
  money = {
    title: 'PK',
    quantite: 100,
  };
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  title = 'deck';

  pokeList = [1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }

}

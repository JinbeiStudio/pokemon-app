import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  title = 'boutique';
  pokeList = [11,12,13,14,15,16,17,18,19,110];
  constructor() { }

  ngOnInit(): void {
  }

}

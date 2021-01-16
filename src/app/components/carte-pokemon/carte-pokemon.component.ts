import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte-pokemon',
  templateUrl: './carte-pokemon.component.html',
  styleUrls: ['./carte-pokemon.component.css'],
})
export class CartePokemonComponent implements OnInit {
  @Input() data: {
      name: String;
      element: String;
      img: String;
      stats: {
        pv: number;
        defense: number;
        attaque: number;
        vitesse: number;
      };
    };
    constructor() {}

  ngOnInit(): void {}
}

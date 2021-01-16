import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-pokemon',
  templateUrl: './carte-pokemon.component.html',
  styleUrls: ['./carte-pokemon.component.css'],
})
export class CartePokemonComponent implements OnInit {
  data = {
    _id: '5fb64119183ebe3f02f31202',
    poke_id: 1,
    name: 'bulbasaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    type: 'grass',
    stats: {
      attack: 65,
      hp: 45,
      speed: 45,
      defense: 65,
    },
    __v: 0,
  };
  constructor() {}

  ngOnInit(): void {}
}

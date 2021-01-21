import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  pokeList = [
    {
      name: "Fearow",
      element: "Normal",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      stats: {
        pv: 100,
        defense: 61,
        attaque: 100,
        vitesse: 100
      }
    },
    {
      name: "bulbasaur",
      element: "Grass",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      stats: {
        pv: 45,
        defense: 65,
        attaque: 65,
        vitesse: 45
      }
    },
    {
      name: "Fearow",
      element: "Normal",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      stats: {
        pv: 100,
        defense: 61,
        attaque: 100,
        vitesse: 100
      }
    },
    {
      name: "bulbasaur",
      element: "Grass",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      stats: {
        pv: 45,
        defense: 65,
        attaque: 65,
        vitesse: 45
      }
    },{
      name: "Fearow",
      element: "Normal",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      stats: {
        pv: 100,
        defense: 61,
        attaque: 100,
        vitesse: 100
      }
    },
    {
      name: "bulbasaur",
      element: "Grass",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      stats: {
        pv: 45,
        defense: 65,
        attaque: 65,
        vitesse: 45
      }
    },{
      name: "Fearow",
      element: "Normal",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      stats: {
        pv: 100,
        defense: 61,
        attaque: 100,
        vitesse: 100
      }
    },
    {
      name: "bulbasaur",
      element: "Grass",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      stats: {
        pv: 45,
        defense: 65,
        attaque: 65,
        vitesse: 45
      }
    },{
      name: "Fearow",
      element: "Normal",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      stats: {
        pv: 100,
        defense: 61,
        attaque: 100,
        vitesse: 100
      }
    },
    {
      name: "bulbasaur",
      element: "Grass",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      stats: {
        pv: 45,
        defense: 65,
        attaque: 65,
        vitesse: 45
      }
    }
    ];
    constructor() {}

    ngOnInit(): void {}
}

import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private PokemonService: PokemonService) {}
  ngOnInit() {
    this.PokemonService.getPokemon(1).subscribe((data) => {
      console.log(data);
    });
  }

  title = 'pokemon-app';
  money = {
    title: 'PK',
    quantite: 100,
  };

  pokeList = [
    {
      name: 'Fearow',
      element: 'Normal',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
      stats: {
        pv: 100,
        defense: 61,
        attaque: 100,
        vitesse: 100,
      },
    },
    {
      name: 'bulbasaur',
      element: 'Grass',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: {
        pv: 45,
        defense: 65,
        attaque: 65,
        vitesse: 45,
      },
    },
    {
      name: 'Fearow',
      element: 'Normal',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
      stats: {
        pv: 100,
        defense: 61,
        attaque: 100,
        vitesse: 100,
      },
    },
    {
      name: 'bulbasaur',
      element: 'Grass',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: {
        pv: 45,
        defense: 65,
        attaque: 65,
        vitesse: 45,
      },
    },
    {
      name: 'Fearow',
      element: 'Normal',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
      stats: {
        pv: 100,
        defense: 61,
        attaque: 100,
        vitesse: 100,
      },
    },
    {
      name: 'bulbasaur',
      element: 'Grass',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: {
        pv: 45,
        defense: 65,
        attaque: 65,
        vitesse: 45,
      },
    },
    {
      name: 'Fearow',
      element: 'Normal',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
      stats: {
        pv: 100,
        defense: 61,
        attaque: 100,
        vitesse: 100,
      },
    },
    {
      name: 'bulbasaur',
      element: 'Grass',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: {
        pv: 45,
        defense: 65,
        attaque: 65,
        vitesse: 45,
      },
    },
    {
      name: 'Fearow',
      element: 'Normal',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
      stats: {
        pv: 100,
        defense: 61,
        attaque: 100,
        vitesse: 100,
      },
    },
    {
      name: 'bulbasaur',
      element: 'Grass',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      stats: {
        pv: 45,
        defense: 65,
        attaque: 65,
        vitesse: 45,
      },
    },
  ];
}

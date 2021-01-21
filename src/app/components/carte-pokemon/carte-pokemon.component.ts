import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-carte-pokemon',
  templateUrl: './carte-pokemon.component.html',
  styleUrls: ['./carte-pokemon.component.css'],
})
export class CartePokemonComponent implements OnInit {
  @Input() cross:boolean;
  @Input() data: {
    name: string;
    poke_id: number;
    image: string;
    type: string;
    stats: {
      attack: number;
      hp: number;
      speed: number;
      defense: number;
    };
  };

  @Input() idPokemon: number;

  constructor(private PokemonService: PokemonService) {
    this.data = {
      name: 'nom',
      poke_id: 1,
      image: 'string',
      type: 'string',
      stats: {
        attack: 1,
        hp: 1,
        speed: 1,
        defense: 1,
      }
    };
    
  }

  ngOnInit() {
    this.PokemonService.getPokemon(this.idPokemon).subscribe((pokemon: any) => {
      console.log(pokemon);
      this.data = pokemon;
    });
  }
}

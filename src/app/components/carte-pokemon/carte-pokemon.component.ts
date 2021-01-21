import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-carte-pokemon',
  templateUrl: './carte-pokemon.component.html',
  styleUrls: ['./carte-pokemon.component.css'],
})
export class CartePokemonComponent implements OnInit {
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

  constructor(private PokemonService: PokemonService) {}

  ngOnInit() {
    this.PokemonService.getPokemon(this.idPokemon).subscribe((pokemon: any) => {
      console.log(pokemon);
      this.data.name = pokemon.name;
    });
  }
}

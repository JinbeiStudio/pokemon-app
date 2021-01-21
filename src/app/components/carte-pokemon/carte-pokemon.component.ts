import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-carte-pokemon',
  templateUrl: './carte-pokemon.component.html',
  styleUrls: ['./carte-pokemon.component.css'],
})
export class CartePokemonComponent implements OnInit {
  @Input() data: {
    name: String;
    poke_id: Number;
    image: String;
    type: String;
    stats: {
      attack: number;
      hp: number;
      speed: number;
      defense: number;
    };
  };

  constructor(private PokemonService: PokemonService) {}

  ngOnInit() {
    this.PokemonService.getPokemon(1).subscribe((data) => {
      console.log(data);
    });
  }
}

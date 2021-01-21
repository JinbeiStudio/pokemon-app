import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-carte-pokemon',
  templateUrl: './carte-pokemon.component.html',
  styleUrls: ['./carte-pokemon.component.css'],
})
export class CartePokemonComponent implements OnInit {
  visible = true;
  @Input() min_attaque = 0;
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

  constructor(private UserDataService: UserDataService,private PokemonService: PokemonService) {
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

  addCard()
  {

    this.cross && this.UserDataService.addCard(this.idPokemon);
    this.visible = false;
    
  }

  sellCard()
  {
    this.cross && this.UserDataService.sellCard();
    this.visible = false;
  }
}

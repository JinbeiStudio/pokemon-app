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
 
}

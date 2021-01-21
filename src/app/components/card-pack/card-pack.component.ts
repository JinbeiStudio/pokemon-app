import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card-pack',
  templateUrl: './card-pack.component.html',
  styleUrls: ['./card-pack.component.css']
})
export class CardPackComponent implements OnInit {
  cards_looted = [];
  constructor(private UserDataService: UserDataService, private PokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  buyPack(): void {
    this.UserDataService.buyCardPack();
    this.cards_looted = this.PokemonService.randomNumbers();
  }
}

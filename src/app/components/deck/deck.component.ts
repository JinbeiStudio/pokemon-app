import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  title = 'deck';
  min_attaque =0;
  user;
  
  constructor(private UserDataService: UserDataService) {
    this.user ={
      name:'attente',
      money:0,
      cards:[],
    }
   }
   public refresh()
   {
    this.user = this.UserDataService.getUserDatas();
   }
   ngOnInit(): void {
    this.UserDataService.subscribe(this);
    this.refresh();
  }

  public updateMinAttaque()
  {
    //this.min_attaque = document.getElementById("min_attaque").value;
  }

}

import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  title = 'boutique';
  user;

  constructor(private UserDataService: UserDataService) {
    this.user ={
      name:'attente',
      money:0,
      cards:[],
    };
   }


   public refresh()
   {
    this.user = this.UserDataService.getUserDatas();
   }
   ngOnInit(): void {
    this.UserDataService.subscribe(this);
    this.refresh();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user;
   /*user:{
     name:"dresseur",
     money:90,
     cards:[];
   };*/
  @Input() currency;
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

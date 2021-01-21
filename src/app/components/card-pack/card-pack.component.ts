import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-card-pack',
  templateUrl: './card-pack.component.html',
  styleUrls: ['./card-pack.component.css']
})
export class CardPackComponent implements OnInit {

  constructor(private UserDataService: UserDataService) { }

  ngOnInit(): void {
  }

  buyPack(): void {
    this.UserDataService.buyCardPack();
  }
}

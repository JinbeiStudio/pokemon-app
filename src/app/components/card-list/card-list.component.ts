import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() delete:boolean;
  @Input() pokeList:[];
  @Input() min_attaque = 0;
  @Input() attaqueMin=0;
    constructor() {}

    ngOnInit(): void {}
}

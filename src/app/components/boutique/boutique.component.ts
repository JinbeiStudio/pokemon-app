import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  title = 'boutique';
  money = {
    title: 'PK',
    quantite: 100,
  };
  constructor() { }

  ngOnInit(): void {
  }

}

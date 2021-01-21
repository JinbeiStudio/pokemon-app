import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  money = 100;
  name = 'Dresseur Sacha';
  cards = [];
  subs = [];
  constructor() {}
  public getUserDatas() {
    return {
      money: this.money,
      name: this.name,
      cards: this.cards,
    };
  }

  public buyCardPack() {
    this.money -= 10;
    this.notify();
  }

  public sellCard() {
    this.money += 0.5;
    this.notify();
  }

  public addCard(id) {
    this.cards.push(id);
    this.notify();
  }

  public subscribe(sub) {
    this.subs.push(sub);
  }

  private notify() {
    this.subs.forEach((element) => {
      element.refresh();
    });
  }
}

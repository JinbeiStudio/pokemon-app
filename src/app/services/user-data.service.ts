import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  money = 100;
  name = "dresseur";
  cards = [11,12,13,14,15,16,17,18,19,110];
  subs = [];
  constructor() { }
  public getUserDatas()
  {
    return {
      money: this.money,
      name: this.name,
      cards: this.cards,
    }
  }

  public buyCardPack()
  {
    this.money -= 10;
    alert('Vous avez acheter un paquet!');
    this.notify();
  }

  public subscribe(sub)
  {
    this.subs.push(sub);
  }

  private notify()
  {
    this.subs.forEach(element => {
      element.refresh();
    });
  }
}

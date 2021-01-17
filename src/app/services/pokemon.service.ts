import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  public entierAleatoire(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public randomNumbers() {
    let numbers: Array<number> = [];
    for (let i: number = 0; i < 10; i++) {
      numbers[i] = this.entierAleatoire(1, 200);
    }
    return numbers;
  }
}

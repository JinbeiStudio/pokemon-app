import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseurl = 'https://lostin70s.com/lpwebfront';

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

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

  // HttpClient API get() method => Fetch Pokemon
  public getPokemon(id: number) {
    return this.http
      .get(this.baseurl + '/api/pokemon/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = 'Pokemon Introuvable';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartePokemonComponent } from './components/carte-pokemon/carte-pokemon.component';
import { HeaderComponent } from './components/header/header.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { DeckComponent } from './components/deck/deck.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';

@NgModule({
  declarations: [
    AppComponent,
    CartePokemonComponent,
    HeaderComponent,
    CardListComponent,
    DeckComponent,
    BoutiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

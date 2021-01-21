import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartePokemonComponent } from './components/carte-pokemon/carte-pokemon.component';
import { HeaderComponent } from './components/header/header.component';
import { CardListComponent } from './card-list/card-list.component';
import { DeckComponent } from './deck/deck.component';
import { BoutiqueComponent } from './boutique/boutique.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

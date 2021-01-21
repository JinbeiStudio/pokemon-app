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
import { PokemonService } from './services/pokemon.service';
import { CardPackComponent } from './components/card-pack/card-pack.component';
import { UserDataService } from './services/user-data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartePokemonComponent,
    HeaderComponent,
    CardListComponent,
    DeckComponent,
    BoutiqueComponent,
    CardPackComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

  providers: [PokemonService,UserDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

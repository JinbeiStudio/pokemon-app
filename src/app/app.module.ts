import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartePokemonComponent } from './components/carte-pokemon/carte-pokemon.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [AppComponent, CartePokemonComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { DeckComponent } from './components/deck/deck.component';

const routes: Routes = [
  { path: "", redirectTo: "deck", pathMatch: "full" },
  { path: "deck", component: DeckComponent },
  { path: "boutique", component: BoutiqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

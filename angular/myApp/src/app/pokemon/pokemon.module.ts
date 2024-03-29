import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
@NgModule({
  declarations: [
    PokemonDetailsComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PokemonDetailsComponent,
    PokemonListComponent
  ]
})
export class PokemonModule { }

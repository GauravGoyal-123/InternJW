import { Component, OnInit } from '@angular/core';
import { Arr } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  array : Arr[] = [
    {
      id : 1,
      name : "Gaurav",
      age : 21
    },
    {
      id : 2,
      name : "Gaurav",
      age : 21
    },
    {
      id : 3,
      name : "Gaurav",
      age : 21
    },
  ];
  constructor() { 
  }
    
  ngOnInit() {
  }

}

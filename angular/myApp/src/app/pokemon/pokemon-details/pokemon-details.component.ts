import { Component, OnInit, Input } from '@angular/core';
import { Arr } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input()
  detail!: Arr;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { MovieData } from 'src/app/models/movieData';

@Component({
  selector: 'tnv-favorites-item',
  templateUrl: './favorites-item.component.html',
  styleUrls: ['./favorites-item.component.scss']
})
export class FavoritesItemComponent implements OnInit {

  @Input () movie: Partial<MovieData> = {};

  constructor() { }

  ngOnInit(): void {
  }

}

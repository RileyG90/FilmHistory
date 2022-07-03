import { Component, Input, OnInit } from '@angular/core';
import { MovieData } from 'src/app/models/movieData';

@Component({
  selector: 'tnv-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input () movie: Partial<MovieData> = {};

  constructor() { }

  ngOnInit(): void {
  }

}
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HistoricalEventsService } from 'src/app/@core/services/api/historical-events.service';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { Doc } from 'src/app/models/historical-events';
import { MovieData } from 'src/app/models/movieData';

@Component({
  selector: 'tnv-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnChanges {

  @Input() filterGteDate: string = "";
  @Input() filterLteDate: string = "";

  movies: Partial<MovieData>[] = [];
  events: Partial<Doc>[] = [];
  event: Partial<FavouriteMovie> = {};

  constructor(
    private movieApiService: MovieApiService,
    private historicalEventsService: HistoricalEventsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

    this.movieApiService.getMovieByDateRange(this.filterGteDate, this.filterLteDate).subscribe(
      response => {
        this.movies = response.results.slice(0, 10);
        console.log(this.movies);
      }),
      this.historicalEventsService.getHistoricalEventsByDateRange(this.filterGteDate, this.filterLteDate).subscribe({
        next: (res) => {
          this.events = res.response.docs;
          console.log(this.events);
          this.getRandomEvent();
        }
      });
  }

  getRandomEvent() {
    const randomEvent = Math.round(Math.random() * this.events.length);
    this.event.event = this.events[randomEvent].abstract;
    console.log(randomEvent);
    console.log(this.event);
    
  }

}
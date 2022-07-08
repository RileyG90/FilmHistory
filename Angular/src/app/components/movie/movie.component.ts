import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';
import { MovieData } from 'src/app/models/movieData';

@Component({
  selector: 'tnv-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MovieComponent implements OnInit, OnChanges {

  @Input() filterGteDate: string = "";
  @Input() filterLteDate: string = "";

  movies: Partial<MovieData>[] = [];

  constructor(private movieApiService: MovieApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
      
    this.movieApiService.getMovieByDateRange(this.filterGteDate, this.filterLteDate).subscribe(
      response => {
        this.movies = response.results.slice(0, 10);
      });   
  }

  ngOnInit(): void { 
  }

}
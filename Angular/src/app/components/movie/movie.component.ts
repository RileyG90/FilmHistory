import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';
import { MovieData } from 'src/app/models/movieData';

@Component({
  selector: 'tnv-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  filterGteDate: string = '2007-01-01';
  filterLteDate: string = '011-12-31';

  movies: Partial<MovieData> [] = [];

  constructor(private httpClient: HttpClient, private movieApiService: MovieApiService) { }

  ngOnInit(): void {
    for(let index = 0; index < 10; index++){
      this.getMovieByDateRange(index);
    }
    

  }

  getMovieByDateRange(index: number){
    this.movieApiService.getMovieByDateRange(this.filterGteDate, this.filterLteDate).subscribe({
      next: (res) => console.log('res = this.movies[index]') 
    });
  }

}

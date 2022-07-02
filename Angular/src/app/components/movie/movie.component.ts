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

  filterGteDate: string = "2020-01-01";
  filterLteDate: string = "2021-12-31";


  constructor(private httpClient: HttpClient, private movieApiService: MovieApiService) {}

  movies = this.movieApiService.movies;

  ngOnInit(): void {
    for(let index= 0; index < 10; index++)
      this.movieApiService.getRandomMovie(index);
  }

  getMovieByDateRange(index: number){
    this.httpClient.get<MovieData>(`https://api.themoviedb.org/3/discover/movie?api_key=3bab4ab26412e6bc2b95a0dee36e5833&language=it-it&primary_release_date.gte=${this.filterGteDate}&primary_release_date.lte=${this.filterLteDate}&sort_by=popularity.desc`)
    .subscribe({
      next: (res) => {
        this.movies[index] = res;
        console.log(res);
      }
    });
  }
}

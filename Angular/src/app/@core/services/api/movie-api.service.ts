import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from 'src/app/models/movieData';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  //esempio link model movie: https://api.themoviedb.org/3/movie/550?api_key=3bab4ab26412e6bc2b95a0dee36e5833&language=it-it
  //esempio link per recupero locandina film: https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg

  TMDBKey: string = "3bab4ab26412e6bc2b95a0dee36e5833";
  TMDBUrlBase: string = "https://api.themoviedb.org/3/movie/";
  urlPosterIMG: string = "https://image.tmdb.org/t/p/original/"

  constructor(private httpClient: HttpClient) { }

  getMovieDetails(movieId: number) {
    return this.httpClient.get<MovieData>(`${this.TMDBUrlBase}${movieId}?api_key=${this.TMDBKey}&language=it-it`);
  }

  getLocandina(posterPath: string){
    return `${this.urlPosterIMG}${posterPath}`;
  }
}

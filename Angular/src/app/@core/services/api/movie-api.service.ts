import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData, MovieDataResponseDTO } from 'src/app/models/movieData';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  //esempio link model movie: https://api.themoviedb.org/3/movie/550?api_key=3bab4ab26412e6bc2b95a0dee36e5833&language=it-it
  //esempio link per recupero locandina film: https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
  //esempio link per recupero classifica da data a data https://api.themoviedb.org/3/discover/movie?api_key=3bab4ab26412e6bc2b95a0dee36e5833&language=it-it&primary_release_date.gte=${date1}&primary_release_date.lte=${date2}&sort_by=popularity.desc

  TMDBUrlBase: string = "https://api.themoviedb.org/3/discover/movie?";
  TMDBKey: string = "api_key=3bab4ab26412e6bc2b95a0dee36e5833";
  urlPosterIMG: string = "https://image.tmdb.org/t/p/original/"




  constructor(private httpClient: HttpClient) { }

  getMovieDetails(movieId: number) {
    return this.httpClient.get<MovieData>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.TMDBKey}&language=it-it`);
  }

  getMovieLocandina(posterPath: string) {
    return `https://image.tmdb.org/t/p/original/${posterPath}`;
  }

  getMovieByDateRange(firstDate: string, secondDate: string) {
    return this.httpClient.get<MovieDataResponseDTO>
      (`${this.TMDBUrlBase}${this.TMDBKey}&language=it-it&primary_release_date.gte=${firstDate}&primary_release_date.lte=${secondDate}&sort_by=popularity.desc`);
  }

  getMovie(movieId: number) {
    return this.httpClient.get<MovieData>(`https://api.themoviedb.org/3/movie/${movieId}?${this.TMDBKey}&language=it-it`);
  }

}
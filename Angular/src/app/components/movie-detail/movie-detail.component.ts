import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';
import { Genre, MovieData, ProductionCompany, ProductionCountry } from 'src/app/models/movieData';

@Component({
  selector: 'tnv-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Partial<MovieData> = {};
  movieGenre: Partial<Genre> [] = [];
  movieProductionCompany: Partial<ProductionCompany> = {};
  movieProductionCountry: Partial<ProductionCountry> = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private movieApiService: MovieApiService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['movieId'];

    this.movieApiService.getMovie(id).subscribe({
      next: (response) => (this.movie = response),
      error: (err) => console.log('movie non trovato!'),
    });
  }
}

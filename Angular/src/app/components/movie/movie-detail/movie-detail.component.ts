import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';
import { MovieData } from 'src/app/models/movieData';

@Component({
  selector: 'tnv-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  

  movie: Partial<MovieData> = {};

  constructor(
    private activatedRoute: ActivatedRoute,
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

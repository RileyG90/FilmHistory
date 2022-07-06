import { Component, Input, OnInit } from '@angular/core';
import { MovieData } from 'src/app/models/movieData';
import { FavouriteApiService } from 'src/app/@core/services/api/favourite-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { User } from 'src/app/models/user';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';

@Component({
  selector: 'tnv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @Input() movie: Partial<MovieData> = {};
  
  currentUser: Partial<User> = {};

  constructor(
    private favouriteApiService: FavouriteApiService, 
    private authService: AuthService, 
    private movieApiService : MovieApiService) { }

    movies = this.movieApiService.movies;

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }
  

}

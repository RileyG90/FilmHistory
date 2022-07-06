import { Component, Input, OnInit } from '@angular/core';
import { MovieData } from 'src/app/models/movieData';
import { FavouriteApiService } from 'src/app/@core/services/api/favourite-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { User } from 'src/app/models/user';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';

@Component({
  selector: 'tnv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @Input() movie: Partial<MovieData> = {};
  
  
  
  currentUser: Partial<User> = {};

  movieUserIdList: Partial<FavouriteMovie>[] = [];
  movieList: Partial<MovieData>[] = [];

  constructor(
    private favouriteApiService: FavouriteApiService, 
    private authService: AuthService, 
    private movieApiService : MovieApiService) { }

    movies = this.movieApiService.movies;

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.getAllFavorite();
  }

  getAllFavorite(){
    const userId = this.currentUser.id;
    this.favouriteApiService.getFavouriteList(userId).subscribe({
      next: (res: FavouriteMovie[]) => {
        this.movieUserIdList = res;
        console.log(this.movieUserIdList);

        for(let i = 0; i < this.movieUserIdList.length; i++) {
          let movieId = this.movieUserIdList[i].movieId
          this.movieApiService.getMovie(movieId).subscribe({
            next: (res) => {
              this.movieList[i] = res;
              console.log(res);
            
          }})
          }   
        }
      });
    }
  
  }

import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FavouriteApiService } from 'src/app/@core/services/api/favourite-api.service';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { MovieData } from 'src/app/models/movieData';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-favorites-item',
  templateUrl: './favorites-item.component.html',
  styleUrls: ['./favorites-item.component.scss']
})
export class FavoritesItemComponent implements OnInit {

  starRating: number = 0;

  @Input () movie: Partial<MovieData> = {};
  @Input () favoriteId: Partial<FavouriteMovie> = {};

  currentUser: Partial<User> = {};

  constructor(
    private authService: AuthService, 
    private favouriteApiService: FavouriteApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  onSubmit(form: NgForm) {
    this.favouriteApiService.deleteFavourite(this.currentUser.id, this.movie.id).subscribe({
      next: (res) => {
      console.log(res);
      window.location.reload();
      }
  });
}

}
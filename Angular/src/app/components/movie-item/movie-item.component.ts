import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FavouriteApiService } from 'src/app/@core/services/api/favourite-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { MovieData } from 'src/app/models/movieData';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input () movie: Partial<MovieData> = {};
  @Input () favourite: Partial<FavouriteMovie> = {};

  currentUser: Partial<User> = {};

  constructor(private favouriteApiService: FavouriteApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    console.log(this.currentUser.id);
    console.log(this.movie.id);
  }

  onSubmit(form: NgForm) {
    form.control.markAllAsTouched();
    if(form.valid){
        this.favouriteApiService.createFavourite(form.value).subscribe({
        next: (res) => {
        console.log(res);
        },
      });
    }
  }
}
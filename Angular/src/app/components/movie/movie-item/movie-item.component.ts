import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FavouriteApiService } from 'src/app/@core/services/api/favourite-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { Doc } from 'src/app/models/historical-events';
import { MovieData } from 'src/app/models/movieData';
import { User } from 'src/app/models/user';
import { MovieComponent } from '../movie.component';

@Component({
  selector: 'tnv-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})


export class MovieItemComponent implements OnInit {

  @Input () movie: Partial<MovieData> = {};
  @Input () favourite: Partial<FavouriteMovie> = {};
 
  @Input () event = this.movieComponent.event;
  

  currentUser: Partial<User> = {};

  constructor(private favouriteApiService: FavouriteApiService, private authService: AuthService, public movieComponent: MovieComponent) { }

  

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  onSubmit(form: NgForm) {
    this.favouriteApiService.createFavourite({userId: this.currentUser.id, movieId: this.movie.id, event: this.event}).subscribe({
        next: (res) => {
        console.log(res);
        },
      });
    }
  
  }

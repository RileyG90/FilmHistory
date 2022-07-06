import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FavouriteApiService } from 'src/app/@core/services/api/favourite-api.service';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { MovieData } from 'src/app/models/movieData';

@Component({
  selector: 'tnv-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input () movie: Partial<MovieData> = {};
  @Input () favourite: Partial<FavouriteMovie> = {};

  constructor(private favouriteApiService: FavouriteApiService) { }

<<<<<<< HEAD
  ngOnInit(): void {}
=======
  constructor(private favouriteApiService: FavouriteApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    console.log(this.currentUser.id);
    console.log(this.movie.id);
  }
>>>>>>> parent of 59f0b07 (fix salvataggio favorite nel db node)

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
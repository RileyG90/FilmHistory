import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FavouriteApiService } from 'src/app/@core/services/api/favourite-api.service';
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

  currentUser: Partial<User> = {};

  constructor(private authService: AuthService, private favouriteApiService: FavouriteApiService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

}
import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/models/movieData';
import { FavouriteApiService } from 'src/app/@core/services/api/favourite-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  movies: Partial<MovieData>[] = [];
  
  currentUser: Partial<User> = {};

  constructor(private favouriteApiService: FavouriteApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();

  }

  getFavouriteList(){
    this.favouriteApiService.getFavouriteList(){


    }
  }
  

}

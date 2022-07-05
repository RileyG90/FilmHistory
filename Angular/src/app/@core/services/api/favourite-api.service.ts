import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';

@Injectable({
  providedIn: 'root'
})
export class FavouriteApiService {

  nodeBaseUrl: string = 'http://localhost:1234/api';

  constructor(private httpClient : HttpClient) { }

  getRating(userId: number, movieId: number){
    return this.httpClient.get<FavouriteMovie>(`${this.nodeBaseUrl}/favourite/${userId}/${movieId}`);
  }

  createRating(rating: Partial<FavouriteMovie>){
    return this.httpClient.post<FavouriteMovie>(`${this.nodeBaseUrl}/favourite`, rating); 
  }

  updateRating(userId: number, rating: Partial<FavouriteMovie>){
    return this.httpClient.patch<FavouriteMovie>(`${this.nodeBaseUrl}/favourite/${userId}/`, rating);
  }

}


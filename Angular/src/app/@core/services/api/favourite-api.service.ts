import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';

@Injectable({
  providedIn: 'root'
})
export class FavouriteApiService {

  nodeBaseUrl: string = 'http://localhost:1234/api';

  constructor(private httpClient : HttpClient) { }

  getFavourite(userId: number, movieId: number){
    return this.httpClient.get<FavouriteMovie>(`${this.nodeBaseUrl}/favourite/${userId}/${movieId}`);
  }

  createFavourite(favourite: Partial<FavouriteMovie>){
    return this.httpClient.post<FavouriteMovie>(`${this.nodeBaseUrl}/favourite`, favourite); 
  }

  updateFavourite(userId: number, favourite: Partial<FavouriteMovie>){
    return this.httpClient.patch<FavouriteMovie>(`${this.nodeBaseUrl}/favourite/${userId}/`, favourite);
  }

}


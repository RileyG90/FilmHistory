import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rating, RatingsApiResponse, Rating_NewEntry } from 'src/app/models/rating';


@Injectable({
  providedIn: 'root'
})
export class RatingApiService {

  nodeBaseUrl: string = 'http://localhost:1234/api';

  constructor(private httpClient: HttpClient) { }

  createNewRating(rating: Rating_NewEntry){
    return this.httpClient.post<Rating_NewEntry>(`${this.nodeBaseUrl}/rating`, rating);
  }

  getRatingsByUserIdMovieId(user_id: number, movie_id: number){
    return this.httpClient.get<RatingsApiResponse>(`${this.nodeBaseUrl}/rating/${user_id}/${movie_id}`);
  }

  deleteRatingById(rating_id: number){
    return this.httpClient.delete<Rating>(`${this.nodeBaseUrl}/rating/${rating_id}`);
  }

  updateRatingById(rating_id: number, rating : Partial<Rating>){
    return this.httpClient.patch<Rating>(`${this.nodeBaseUrl}/rating/${rating_id}`, rating);
  }
}

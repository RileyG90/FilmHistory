import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rating } from 'src/app/models/rating';


@Injectable({
  providedIn: 'root'
})
export class RatingApiService {

  nodeBaseUrl: string = 'http://localhost:1234/api';

  constructor(private httpClient: HttpClient) { }

  getRating(movieId: number | undefined){
    return this.httpClient.get<Rating>(`${this.nodeBaseUrl}/rating/${movieId}`);
  }

  createRating(rating: Partial<Rating>){
    return this.httpClient.post<Rating>(`${this.nodeBaseUrl}/rating`, rating); 
  }

  updateRating(userId: number, rating: Partial<Rating>){
    return this.httpClient.patch<Rating>(`${this.nodeBaseUrl}/rating/${userId}/`, rating);
  }

  deleteRating(userId: number){
    return this.httpClient.delete<Rating>(`${this.nodeBaseUrl}/rating/${userId}/`);
  }
}

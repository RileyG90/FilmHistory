import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoricalEvents } from 'src/app/models/historical-events';

@Injectable({
  providedIn: 'root'
})
export class HistoricalEventsService {

  TMDBUrlBase: string = "https://api.themoviedb.org/3/discover/movie?";
  TNYTKey: string = "api-key=GZ1h69KIkGFjbTHIn7mOKXNQwlOVu8oI";

  constructor(private httpClient: HttpClient) { }

  getHistoricalEventsByDateRange(firstDate: string, secondDate: string) {
    return this.httpClient.get<HistoricalEvents>(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=1&begin_date=${firstDate}&end_date=${secondDate}&${this.TNYTKey}`);
  }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HistoricalEventsService } from 'src/app/@core/services/api/historical-events.service';
import { Doc } from 'src/app/models/historical-events';
import { CommentApiService } from '../../../@core/services/api/comment-api.service';

@Component({
  selector: 'tnv-movie-popularity',
  templateUrl: './movie-popularity.component.html',
  styleUrls: ['./movie-popularity.component.scss']
})
export class MoviePopularityComponent implements OnInit {

  filterGteDate: string = "";
  filterLteDate: string = "";
  startDate: string = "";
  endDate: string = "";
  isMovieListRendered = false;

  events: Partial<Doc>[] = [];

  constructor(private historicalEventsService: HistoricalEventsService) { }

  ngOnInit(): void {
  }

  onFormSubmit() {

    this.startDate = this.filterGteDate;
    this.endDate = this.filterLteDate;

    if (this.checkDate(this.startDate, this.endDate)) {
      this.isMovieListRendered = true;
    }
  }

  checkDate(startDate: string, endDate: string): boolean {

    if (startDate == "" || endDate == "") {
      alert("Attenzione! Inserisci entrambe le date!");
      return false;
    }

    var startDateParsed = Date.parse(startDate);
    var endDateParsed = Date.parse(endDate);
    if (endDateParsed < startDateParsed) {
      alert("Attenzione! La data di Inizio deve essere precedente alla data di Fine!");
      return false;
    }

    return true;
  }

}

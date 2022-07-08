import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommentApiService } from 'src/app/@core/services/api/comment-api.service';

@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  filterGteDate: string = "";
  filterLteDate: string = "";
  startDate: string = "";
  endDate: string = "";
  isMovieListRendered = false;

  constructor(private commentApiService: CommentApiService,
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  getAllComments() {
    this.commentApiService.getAllComment();
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
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

  getAllComments(){
    this.commentApiService.getAllComment();
  }

  onFormSubmit() {
    //da verificare validità date
    this.startDate = this.filterGteDate;
    this.endDate = this.filterLteDate;

    this.isMovieListRendered = true;
  }

}
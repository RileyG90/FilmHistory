import { Component, OnInit } from '@angular/core';
import { CommentApiService } from 'src/app/@core/services/api/comment-api.service';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';

@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private commentApiService: CommentApiService, private movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.commentApiService.getAllComment().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });

    this.movieApiService.getMovieFromDateToDate("2007-01-01", "2011-12-31").subscribe({
      next: (res) => console.log(res)
    });
  }

}

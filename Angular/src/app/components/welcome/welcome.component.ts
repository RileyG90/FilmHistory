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
    
  }

  getAllComments(){
    this.commentApiService.getAllComment();
  }

}

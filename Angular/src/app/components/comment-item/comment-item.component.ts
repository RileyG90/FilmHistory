import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentApiService } from 'src/app/@core/services/api/comment-api.service';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieData } from 'src/app/models/movieData';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  @Input () comment: Partial<Comment> = {};
  @Input () user: Partial<User> = {};
  @Input () movies: Partial<MovieData> = {};
  

  movie: Partial<MovieData> = {};
  id: string = "";



  currentUser: Partial<User> = {};

  commentCreated: Partial<Comment>[] = [];

  constructor(
    private authService: AuthService, 
    private commentApiService: CommentApiService,
    private route: ActivatedRoute,
    private movieApiService: MovieApiService) { }


  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  onSubmit(form: NgForm) {
    this.commentApiService.createComment({ user_Id: this.currentUser.id, movie_Id: this.movie.id, comment: form.controls['comment'].value}).subscribe({
       next: (res) => console.log(res)
    });
  }


}

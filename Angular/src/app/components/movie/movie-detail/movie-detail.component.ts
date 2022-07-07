import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentApiService } from 'src/app/@core/services/api/comment-api.service';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { Comment } from 'src/app/models/comment';
import { MovieData } from 'src/app/models/movieData';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  
  commentList: Partial<Comment> = {};
  movie: Partial<MovieData> = {};
  currentUser: Partial<User> = {};
  now = new Date()

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieApiService: MovieApiService,
    private commentApiService: CommentApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    const id = this.activatedRoute.snapshot.params['movieId'];

    this.movieApiService.getMovie(id).subscribe({
      next: (response) => (this.movie = response),
      error: (err) => console.log('movie non trovato!'),
    });

    this.getCommentsList();
  }

  getCommentsList(){
    this.commentApiService.getAllComment().subscribe({
      next: (res) => {
        this.commentList = res;
        console.log(this.commentList);
      }
    });
  }
}

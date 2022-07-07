import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentApiService } from 'src/app/@core/services/api/comment-api.service';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieData } from 'src/app/models/movieData';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  

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
  }

  onSubmit(form: NgForm) {
    this.commentApiService.createComment({ user_Id: this.currentUser.id, movie_Id: this.movie.id, comment: form.controls['comment'].value}).subscribe({
       next: (res) => console.log(res)
    });
  }
}

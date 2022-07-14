import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentApiService } from 'src/app/@core/services/api/comment-api.service';
import { FavouriteApiService } from 'src/app/@core/services/api/favourite-api.service';
import { MovieApiService } from 'src/app/@core/services/api/movie-api.service';
import { RatingApiService } from 'src/app/@core/services/api/rating-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { Comment } from 'src/app/models/comment';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { MovieData } from 'src/app/models/movieData';
import { Rating } from 'src/app/models/rating';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() comment: Partial<Comment> = {};
  @Input() user: Partial<User> = {};

  currentRate: number = 0;


  commentList: Partial<Comment>[] = [];
  movie: Partial<MovieData> = {};
  event: Partial<FavouriteMovie> = {}

  currentUser: Partial<User> = {};
  now = new Date()


  constructor(
    private activatedRoute: ActivatedRoute,
    private movieApiService: MovieApiService,
    private commentApiService: CommentApiService,
    private authService: AuthService,
    private ratingApiService: RatingApiService,
    private favouriteApiService: FavouriteApiService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    const id = this.activatedRoute.snapshot.params['movieId'];

    this.movieApiService.getMovie(id).subscribe({
      next: (response) => (this.movie = response),
      error: (err) => console.log('movie non trovato!'),
    });

    this.getCommentsList();
    this.getRatingByMovieId();
    this.getEventByMovieId();


  }

  getCommentsList() {
    const id = this.activatedRoute.snapshot.params['movieId'];
    this.commentApiService.getCommentByMovieId(id).subscribe({
      next: (res: Comment[]) => {
        this.commentList = res;
        console.log(this.commentList);
      }
    });
  }

  getRatingByMovieId() {
    const id = this.activatedRoute.snapshot.params['movieId'];
    this.ratingApiService.getRating(id).subscribe({
      next: (res) => {
        this.currentRate = res.rating;
        console.log(this.currentRate);
      }
    });
  }

  getEventByMovieId() {
    const id = this.activatedRoute.snapshot.params['movieId'];
    this.favouriteApiService.getFavourite(this.currentUser.id, id).subscribe({
      next: (res) => {
        this.event = res;
        console.log(this.event);
      }
    })
  }
  

}
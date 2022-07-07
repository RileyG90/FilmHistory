import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentApiService } from 'src/app/@core/services/api/comment-api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieData } from 'src/app/models/movieData';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-add-comment-item',
  templateUrl: './add-comment-item.component.html',
  styleUrls: ['./add-comment-item.component.scss']
})
export class AddCommentItemComponent implements OnInit {

  @Input () movie: Partial<MovieData> = {};

  currentUser: Partial<User> = {};
  now = new Date()


  constructor(
    private commentApiService: CommentApiService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  onSubmit(form: NgForm) {
    this.commentApiService.createComment({ user_Id: this.currentUser.id, movie_Id: this.movie.id, comment: form.controls['comment'].value}).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      }
    });
}

}

  



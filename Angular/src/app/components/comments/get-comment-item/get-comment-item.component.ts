import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentApiService } from 'src/app/@core/services/api/comment-api.service';
import { MovieData } from 'src/app/models/movieData';
import { Comment } from 'src/app/models/comment';
import { AuthService } from 'src/app/@core/services/auth.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'tnv-get-comment-item',
  templateUrl: './get-comment-item.component.html',
  styleUrls: ['./get-comment-item.component.scss']
})
export class GetCommentItemComponent implements OnInit {

  @Input() comment: Partial<Comment> = {};
  @Input() user: Partial<User> = {};
  @Input() rate: Partial<Rating> = {};

  currentRate: number = 0;

  commentList: Partial<Comment> = {};
  currentUser: Partial<User> = {};

  constructor(
    private authService: AuthService,
    private commentApiService: CommentApiService) { }

  ngOnInit(): void {
    this.getUserIdById();
  }

  /*onSubmit(form: NgForm) {

    this.commentApiService.deleteCommentByIdComment(this.comment.id).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      }
    });
  }
  
  html
  <form #f="ngForm" (ngSubmit)="onSubmit(f)">
  <button type="submit" *ngIf="onSubmit" class="btn btn-outline-danger btn-sm mt-3">Cancel</button>
  </form>
  
  */

  getUserIdById(){
    this.authService.getUserById(this.comment.user_Id).subscribe({
      next: (res) => {
         this.user = res;
      }
    });
  }

}

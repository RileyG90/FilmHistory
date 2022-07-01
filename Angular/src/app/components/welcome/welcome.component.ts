import { Component, OnInit } from '@angular/core';
import { CommentApiService } from 'src/app/@core/services/api/comment-api.service';

@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private commentApiService: CommentApiService, ) { }

  ngOnInit(): void {
    this.commentApiService.getAllComment().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });
  }

}

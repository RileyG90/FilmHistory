import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommentApiService } from 'src/app/@core/services/api/comment-api.service';

@Component({
  selector: 'tnv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  constructor(private commentApiService: CommentApiService,
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
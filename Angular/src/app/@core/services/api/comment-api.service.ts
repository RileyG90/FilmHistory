import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentApiService {

  dotnetBaseUrl: string = 'http://localhost:5223/api/comments';

  constructor(private httpClient: HttpClient) { }

  getAllComment(){
    return this.httpClient.get<Comments>(`${this.dotnetBaseUrl}`);
  }

  getCommentByIdComment(idComment: number){
    return this.httpClient.get<Comment>((`${this.dotnetBaseUrl}/${idComment}`));
  }

  deleteCommentByIdComment(idComment: number) {
    return this.httpClient.delete<Comment>((`${this.dotnetBaseUrl}/${idComment}`));
  }

  createComment(comment: Comment) {
    return this.httpClient.post<Comment>((`${this.dotnetBaseUrl}`), comment);
  }
  
}

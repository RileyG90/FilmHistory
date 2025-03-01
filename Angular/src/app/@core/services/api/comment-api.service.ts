import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentApiService {

  dotnetBaseUrl: string = 'http://localhost:5223/api/comments';

  constructor(private httpClient: HttpClient) { }

  getAllComment(){
    return this.httpClient.get<Comment>(`${this.dotnetBaseUrl}`);
  }

  getCommentByMovieId(movieId: number | undefined){
    return this.httpClient.get<Comment[]>((`${this.dotnetBaseUrl}/${movieId}`));
  }

  deleteCommentByIdComment(idComment: number | undefined) {
    return this.httpClient.delete<Comment>((`${this.dotnetBaseUrl}/${idComment}`));
  }

  createComment(comment: Partial <Comment>) {
    return this.httpClient.patch<Comment>((`${this.dotnetBaseUrl}`), comment);
  }
  
}

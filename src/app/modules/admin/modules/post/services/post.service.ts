import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';
import { PostComment } from '../models/post-comment.model';
import { switchMap, take, tap } from 'rxjs';
import { LogService } from '../../log/services/log.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(
    private http: HttpClient,
    private logService: LogService
  ) { }

  getPostsByUser(userId: number){
    return this.http.get<Post[]>(environment.baseApi + `/users/${userId}/posts`);
  }

  getCommentsByPost(postId: number){
    return this.http.get<PostComment[]>(environment.baseApi + `/posts/${postId}/comments`);
  }

  deletePost(postId: number) {
    return this.http.delete<void>(environment.baseApi + `/posts/${postId}`)
      .pipe(
        tap(() => {
          this.logService.create({
            action: 'delete',
            entity: 'post',
            entityId: postId
          }).pipe(
            take(1)
          ).subscribe({
            error: (error) => console.error('Failed to create log:', error)
          });
        })
      )
  }
}

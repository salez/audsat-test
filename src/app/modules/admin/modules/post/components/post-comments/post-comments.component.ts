import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostComment } from '../../models/post-comment.model';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCommentsComponent {
  @Input({required: true}) postId!: number;

  protected comments$?: Observable<PostComment[]>;
  protected loading = signal(true);

  constructor(
    private postService: PostService
  ){}

  ngOnInit(): void {
    this.comments$ = this.postService.getCommentsByPost(this.postId).pipe(
      tap(() => this.loading.set(false))
    );
  }
}

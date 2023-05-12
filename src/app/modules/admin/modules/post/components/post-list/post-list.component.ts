import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { BehaviorSubject, ReplaySubject, takeUntil } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { NotificationService } from '@modules/admin/services/notification.service';
import { animations } from '@core/animations/animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    animations.fadeHeightLeaveAnimation
  ]
})
export class PostListComponent implements OnInit, OnDestroy {
  @Input({required: true}) userId!: number;
  protected activePosts = signal<boolean[]>([]);
  protected deletingPosts = signal<boolean[]>([]);
  protected posts$ = new BehaviorSubject<Post[]>([]);
  protected loading = signal(true);
  private destroy$ = new ReplaySubject<void>(1);

  constructor(
    private postService: PostService,
    private notificationService: NotificationService
  ){}

  ngOnInit(): void {
    this.postService.getPostsByUser(this.userId)
      .pipe(
        takeUntil(this.destroy$)
      )
    .subscribe((posts) => {
      this.posts$.next(posts);
      this.loading.set(false);
    });
  }

  protected deletePost(postId: number){
    this.deletingPosts.mutate((postStates) => postStates[postId] = true);

    this.postService.deletePost(postId).subscribe(() => {
      this.notificationService.success('Post apagado com sucesso. (fake)');
      //fake delete post
      this.posts$.next(this.posts$.value.filter((post) => post.id !== postId));
      this.deletingPosts.mutate((postStates) => delete postStates[postId]);
    });
  }

  protected onOpenPost(postId: number){
    this.activePosts.mutate((postStates) => postStates[postId] = true);
  }

  protected onClosePost(postId: number){
    this.activePosts.mutate((postStates) => postStates[postId] = false);
  }

  protected postsTrackByFn(index: number, item: Post){
    return item.id;
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }
}

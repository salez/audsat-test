import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { PostHistoryComponent } from './components/post-history/post-history.component';



@NgModule({
  declarations: [
    PostListComponent,
    PostCommentsComponent,
    PostHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }

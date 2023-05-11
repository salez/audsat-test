import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { PostHistoryComponent } from './components/post-history/post-history.component';
import { PageTitleComponent } from '@shared/components/page-title/page-title.component';
import { PageContentComponent } from '@shared/components/page-content/page-content.component';
import { UserDataComponent } from '../user/components/user-data/user-data.component';
import { PostRoutingModule } from './post-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonMaterialModule } from '@shared/common-material.module';
import { MatCardModule } from '@angular/material/card';
import { LoadingShimmerComponent } from '@shared/components/loading-shimmer/loading-shimmer.component';

@NgModule({
  declarations: [
    PostHistoryComponent,
    PostListComponent,
    PostCommentsComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    PageTitleComponent,
    PageContentComponent,
    UserDataComponent,
    CommonMaterialModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatCardModule,
    LoadingShimmerComponent
  ]
})
export class PostModule { }

import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { PageTitleComponent } from '@shared/components/page-title/page-title.component';
import { PageContentComponent } from '@shared/components/page-content/page-content.component';
import { SearchFilterComponent } from '@shared/components/search-filter/search-filter.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CommonMaterialModule } from '@shared/common-material.module';
import { CommonModule } from '@angular/common';
import { LoadingShimmerComponent } from '@shared/components/loading-shimmer/loading-shimmer.component';
import { EmptyStateComponent } from '@shared/components/empty-state/empty-state.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PageTitleComponent,
    PageContentComponent,
    SearchFilterComponent,
    CommonMaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    LoadingShimmerComponent,
    EmptyStateComponent,
  ],
  exports: [],
  providers: [],
})
export class UserModule { }

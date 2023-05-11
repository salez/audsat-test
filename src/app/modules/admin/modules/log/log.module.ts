import { NgModule } from '@angular/core';
import { LogsComponent } from './components/logs/logs.component';
import { LogRoutingModule } from './log-routing.module';
import { PageTitleComponent } from '@shared/components/page-title/page-title.component';
import { PageContentComponent } from '@shared/components/page-content/page-content.component';
import { SearchFilterComponent } from '@shared/components/search-filter/search-filter.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoadingShimmerComponent } from '@shared/components/loading-shimmer/loading-shimmer.component';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '@shared/components/empty-state/empty-state.component';

@NgModule({
  imports: [
    CommonModule,
    LogRoutingModule,
    PageTitleComponent,
    PageContentComponent,
    SearchFilterComponent,
    MatTableModule,
    MatPaginatorModule,
    LoadingShimmerComponent,
    EmptyStateComponent
  ],
  exports: [],
  declarations: [
    LogsComponent
  ],
  providers: [],
})
export class LogModule { }

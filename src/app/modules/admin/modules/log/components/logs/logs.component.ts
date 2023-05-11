import { ChangeDetectionStrategy, Component, ViewChild, signal } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Log } from '../../models/log.model';
import { AuthService } from '@core/auth/services/auth.service';
import { LogService } from '../../services/log.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Log>;

  readonly displayedColumns = ['user', 'action', 'entity', 'createdAt'];

  protected dataSource!: MatTableDataSource<Log>;
  protected loading = signal(true);
  
  constructor(
    protected authService: AuthService,
    protected logService: LogService
  ) {
    this.logService.getLogs()
      .pipe(
        takeUntilDestroyed()
      )
      .subscribe(logs => {
        this.dataSource = new MatTableDataSource<Log>(logs);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.loading.set(false);
      });
  }

  filterLogs(searchTerm: string) {
    if(!this.dataSource) return;

    this.dataSource.filterPredicate = (data: Log, filter: string) => {
      const { action, entity, user } = data;
      return action.toLowerCase().includes(filter) 
        || entity.toLowerCase().includes(filter) 
        || user.toLowerCase().includes(filter);
    };

    this.dataSource.filter = searchTerm.trim().toLowerCase();
  }
}

import { ChangeDetectionStrategy, Component, ViewChild, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '@core/auth/services/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<User>;
  

  readonly displayedColumns = ['name', 'username', 'email', 'phone', 'actions'];

  protected dataSource!: MatTableDataSource<User>;
  protected loading = signal(true);

  constructor(
    protected authService: AuthService,
    protected userService: UserService,
    protected router: Router
  ) {
    this.userService.getUsers()
      .pipe(
        takeUntilDestroyed()
      )
      .subscribe({
        next: (users) => {
          this.dataSource = new MatTableDataSource<User>(users);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        }
      });
  }

  postHistory(id: number){
    this.router.navigate(['/admin/posts/user', id]);
  }

  filterUsers(searchTerm: string) {
    if(!this.dataSource) return;

    this.dataSource.filterPredicate = (data: User, filter: string) => {
      const { name, email, username } = data;
      return name.toLowerCase().includes(filter) 
        || email.toLowerCase().includes(filter) 
        || username.toLowerCase().includes(filter);
    };

    this.dataSource.filter = searchTerm.trim().toLowerCase();
  }
}

import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { User } from '../../models/user.model';
import { MatCardModule } from '@angular/material/card';
import { CommonMaterialModule } from '@shared/common-material.module';
import { LoadingShimmerComponent } from '@shared/components/loading-shimmer/loading-shimmer.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CommonMaterialModule, MatCardModule, LoadingShimmerComponent],
  standalone: true
})
export class UserDataComponent {
  @Input({ required: true }) set id(value: number) {
    this.loading.set(true);
    
    this.user$ = this.userService.getUser(value).pipe(
      tap(() => {
        this.loading.set(false);
      })
    );
  }

  protected loading = signal(true);
  protected user$: Observable<User> | undefined;

  constructor(
    private userService: UserService
  ) { }
}

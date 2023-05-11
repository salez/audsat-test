import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { MatCardModule } from '@angular/material/card';
import { CommonMaterialModule } from '@shared/common-material.module';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CommonMaterialModule, MatCardModule],
  standalone: true
})
export class UserDataComponent {
  @Input({ required: true }) set id(value: number) {
    this.user$ = this.userService.getUser(value);
  }

  protected user$: Observable<User> | undefined;

  constructor(
    private userService: UserService
  ) { }
}

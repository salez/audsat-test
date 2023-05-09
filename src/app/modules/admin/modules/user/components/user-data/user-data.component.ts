import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDataComponent {
  @Input({ required: true }) id!: string;

  protected user$ = this.userService.getUser(this.id);
  
  constructor(
    private userService: UserService
  ) { }
}

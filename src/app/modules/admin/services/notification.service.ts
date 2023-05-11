import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminModule } from '@modules/admin/admin.module';

const SNACKBAR_DURATION = 300000;

@Injectable({
  providedIn: AdminModule
})
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  success(msg: string) {
    this.snackBar.open(msg, undefined, {
      duration: SNACKBAR_DURATION,
      panelClass: ['snackbar-success']
    });
  }

  error(msg: string) {
    this.snackBar.open(msg, undefined, {
      duration: SNACKBAR_DURATION,
      panelClass: ['snackbar-error']
    });
  }
}

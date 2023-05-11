import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    AdminRoutingModule,
    MatSnackBarModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class AdminModule { }

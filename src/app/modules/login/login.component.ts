import { AfterViewInit, ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '@core/auth/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject, firstValueFrom, lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { CommonMaterialModule } from '@shared/common-material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    CommonMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements AfterViewInit {
  @Input() redirect: string | undefined;

  protected showPassword = signal(false);
  protected loginForm = this.fb.group({
    email: ['admin@admin.com', [
      Validators.required,
      Validators.email
    ]],
    password: ['admin', [
      Validators.required,
      Validators.maxLength(8)
    ]]
  });

  loginError$ = new BehaviorSubject<boolean>(false);

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    
    this.loginForm.valueChanges.subscribe(() => {
      this.loginError$.next(false);
    });
  }

  ngAfterViewInit() {
    this.logoutIfLoggedIn();
  }

  async logoutIfLoggedIn(){
    const loggedIn = await firstValueFrom(this.authService.isLoggedIn$);
    if(loggedIn)
      this.authService.logout();
  }
  
  login(){
    this.authService.fakeLogin({
      email: this.loginForm.controls.email.value ?? '',
      password: this.loginForm.controls.password.value ?? ''
    }).subscribe((user) => {
      if(user){
        this.router.navigate([this.redirect ?? '/admin']);
      } else {
        this.loginError$.next(true);
      }
    });
  }
}

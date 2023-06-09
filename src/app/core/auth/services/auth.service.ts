import { Injectable } from '@angular/core';
import { map, of, ReplaySubject, take } from 'rxjs';
import { LoginData } from '../models/login-data.model';
import { AuthUser } from '../models/auth-user.model';

const FAKE_LOGIN = {
  email: 'admin@admin.com',
  password: 'admin',
  accessToken: '123456'
}
@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  private _userAuthenticated$ = new ReplaySubject<AuthUser | null>(1);
  userAuthenticated$ = this._userAuthenticated$.asObservable();

  isLoggedIn$ = this._userAuthenticated$.pipe(
    map(user => !!user)
  );

  constructor(
  ) {
    this.checkIfUserIsAuthenticated();
  }

  private checkIfUserIsAuthenticated() {
    const userToken = this.getUserTokenFromStorage();
    if (!userToken){
      this._userAuthenticated$.next(null);
      return;
    }

    this.fakeLogin({
      email: FAKE_LOGIN.email,
      password: FAKE_LOGIN.password
    }).subscribe();
  }

  private saveUserTokenToStorage(token: string) {
    localStorage.setItem('userToken', token);
  }

  private getUserTokenFromStorage() {
    return localStorage.getItem('userToken');
  }

  getFakeAuthToken() {
    return this.getUserTokenFromStorage();
  }

  fakeLogin(loginData: LoginData) {
    return of(loginData)
      .pipe(
        take(1),
        map((loginData) => {
          const user: AuthUser = {
            id: 1,
            name: 'Admin',
            email: 'admin@teste.com',
            role: 'admin',
            permissions: ['read', 'write'],
            accessToken: FAKE_LOGIN.accessToken
          }

          if (loginData.email === FAKE_LOGIN.email && loginData.password === FAKE_LOGIN.password) {
            this._userAuthenticated$.next(user);
            this.saveUserTokenToStorage(user.accessToken);
            return user;
          }
          this._userAuthenticated$.next(null);
          return null;
        })
      )
  };

  logout() {
    this._userAuthenticated$.next(null);
    localStorage.removeItem('userToken');
  }

}
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, of, ReplaySubject, shareReplay, switchMap, take, tap } from 'rxjs';
import { LoginData } from '../models/login-data.model';
import { PermissionService } from './permission.service';
import { User } from '@modules/admin/modules/user/models/user.model';

const FAKE_LOGIN = {
  email: 'admin@admin.com',
  password: 'admin',
  accessToken: '123456'
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userAuthenticated$ = new ReplaySubject<User | null>(1);
  userAuthenticated$ = this._userAuthenticated$.asObservable();

  // permissions$ = this.userAuthenticated$.pipe(
  //   distinctUntilChanged(),
  //   switchMap(user => user ? this.permissionService.getRole(user.role) : of(null)),
  //   map(role => role?.permissions ?? []),
  //   shareReplay(1)
  // )

  isLoggedIn$ = this._userAuthenticated$.pipe(
    map(user => !!user)
  );

  constructor(
    private permissionService: PermissionService
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

  // hasPermission$(permission: string) {
  //   return this.permissions$.pipe(
  //     map(permissions => permissions.includes(permission)),
  //   );
  // }

  getFakeAuthToken() {
    return this.getUserTokenFromStorage();
  }

  fakeLogin(loginData: LoginData) {
    return of(loginData)
      .pipe(
        take(1),
        map((loginData) => {
          const user: User = {
            id: '1',
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
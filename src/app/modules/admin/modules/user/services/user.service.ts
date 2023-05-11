import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(id: number){
    return this.http.get<User>(environment.baseApi + '/users/' + id);
  }

  getUsers(){
    return this.http.get<User[]>(environment.baseApi + '/users');
  }
}

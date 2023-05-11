import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Log } from '../models/log.model';
import { AuthService } from '@core/auth/services/auth.service';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getLogs(){
    return this.http.get<Log[]>(environment.mockApi + '/logs');
  }

  create(log: Pick<Log, 'action' | 'entity' | 'entityId'>){
    return this.authService.userAuthenticated$.pipe(
      switchMap((user) => this.http.post(environment.mockApi + '/logs', {
        ...log,
        user: user?.name,
        createdAt: new Date(),
      }))
    ) 
  }
}

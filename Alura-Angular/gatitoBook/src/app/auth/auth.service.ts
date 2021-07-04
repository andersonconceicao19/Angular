import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3000/user";
  constructor(private http: HttpClient) { }

  autenticar(user: AuthUser): Observable<any> {
    return this.http.post(this.url, user);
  }
}

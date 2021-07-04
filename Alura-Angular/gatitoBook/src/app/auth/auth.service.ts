import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUser } from './../shared/models/authUser'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3000/login";
  constructor(private http: HttpClient) { }

  autenticar(user: AuthUser): Observable<any> {
// Estamos ignorando aqui a parte da senha, pois não é possivel implementar utilizando o JSON SERVE
    return this.http.get(`${this.url}?username=${user.username}`);
  }
}

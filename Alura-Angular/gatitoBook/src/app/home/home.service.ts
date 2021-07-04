import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = "http://localhost:3000/user"
constructor(private http: HttpClient) { }

  add(user: User){
    console.log(user);

    return this.http.post(this.url, user)
  }
}

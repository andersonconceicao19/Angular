import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/product.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {  }

  url = 'http://localhost:3000/v1';

  getProduct() {
    return this.http.get<Product[]>(`${this.url}/products` );
  }
  autenticate(data)
  {
    return this.http.post(`${this.url}/accounts/authenticate`, data);
  }
}

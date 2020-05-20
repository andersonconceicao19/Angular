


import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3333/Products';

  constructor(private snackebar:MatSnackBar,
    private http: HttpClient) { }

  showmessage(msg: string): void
  {
    this.snackebar.open(msg, 'x', {
     duration: 3000,
     horizontalPosition: "center",
     verticalPosition: "top"
    })
  }

  Create(product: Product): Observable<Product>
  {
    return this.http.post<Product>(this.baseUrl, product)
  }
  
  Read(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl)
  }
  ReadbyId(id: string): Observable<Product>
  {
    const urlget = ` ${this.baseUrl}/${id}` 
    
    return this.http.get<Product>(urlget)
  }

  Update(product: Product): Observable<Product>{
    const url = ` ${this.baseUrl}/${product.id}` 
    
    return this.http.put<Product>(url, product)
  }

}

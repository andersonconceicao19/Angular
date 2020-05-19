
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';


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

}

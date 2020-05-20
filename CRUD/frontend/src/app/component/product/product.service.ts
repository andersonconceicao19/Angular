


import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3333/Products';

  constructor(private snackebar:MatSnackBar,
    private http: HttpClient) { }

  showmessage(msg: string, isError: boolean = false): void
  {
    this.snackebar.open(msg, 'x', {
     duration: 3000,
     horizontalPosition: "center",
     verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    })
  }

  Create(product: Product): Observable<Product>
  {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj)=> obj),
      catchError((e)=>this.errorHandler(e))
    )
  }
  
  Read(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj)=> obj),
      catchError((e)=>this.errorHandler(e))
    )
  }
  ReadbyId(id: string): Observable<Product>
  {
    const urlget = ` ${this.baseUrl}/${id}` 
    
    return this.http.get<Product>(urlget).pipe(
      map((obj)=> obj),
      catchError((e)=>this.errorHandler(e))
    )
  }

  Update(product: Product): Observable<Product>{
    const url = ` ${this.baseUrl}/${product.id}` 
    
    return this.http.put<Product>(url, product).pipe(
      map((obj)=> obj),
      catchError((e)=>this.errorHandler(e))
    )
  }
  Remove(id: number): Observable<Product>{
    const url = ` ${this.baseUrl}/${id}` 
    
    return this.http.delete<Product>(url).pipe(
      map((obj)=> obj),
      catchError((e)=>this.errorHandler(e))
    )
  }
  
  errorHandler(e: any): Observable<any> {
    this.showmessage("Ocorreu um erro!", true);
    return 
  } 


}



import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Product } from './../product.model';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

    product: Product = { 
       
      name: 'teclado',
      price: 15.5
    }

  constructor(private productserves: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  CreateProduct(): void  {
    this.productserves.Create(this.product).subscribe(
      () => 
      {
      this.productserves.showmessage("Produto salvo com sucesso!!")
      this.router.navigate(['/product'])
      }
      )
    
  }

  Cancel(){
    this.router.navigate(['/product'])
  }
 
}

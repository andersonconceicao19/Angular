import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action']
  constructor(private productServe: ProductService) { }

  ngOnInit(): void {
    this.productServe.Read().subscribe(prod => {
      this.products = prod

      console.log(this.products);
      
    })
  }



}

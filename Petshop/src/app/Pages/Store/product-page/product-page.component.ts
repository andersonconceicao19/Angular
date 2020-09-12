import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product.model';

import { DataService } from './../../../Services/data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html'
})
export class ProductPageComponent implements OnInit {

  product$: Observable<Product[]>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.product$ = this.dataService.getProduct();
  }

}

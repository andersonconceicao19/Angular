
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product.model';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  produto: Product

  constructor(private productService: ProductService,
    private routers: Router,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.productService.ReadbyId(id).subscribe(x => this.produto = x)

  }
  UpdateProduct(): void {
    this.productService.Update(this.produto).subscribe(() => {
      this.productService.showmessage('produto atualizado')
      this.routers.navigate(['/product'])
    })
  }
  
  Cancel(): void {
    this.routers.navigate(['/product'])
  }

}

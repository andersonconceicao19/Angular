
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-remove',
  templateUrl: './product-remove.component.html',
  styleUrls: ['./product-remove.component.css']
})
export class ProductRemoveComponent implements OnInit {

product: Product

  constructor(private router: Router,
              private productservice: ProductService,
              private routes: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routes.snapshot.paramMap.get('id');
    this.productservice.ReadbyId(id).subscribe(product => this.product = product)     
    
  }

  Confirma() : void
  {   
   this.productservice.Remove(this.product.id).subscribe(()=>{
     this.productservice.showmessage("Excluido com sucesso!!")
     this.router.navigate(['/product'])
   })
  }
  Cancel()
  {
    this.router.navigate(['/product'])
  }

}

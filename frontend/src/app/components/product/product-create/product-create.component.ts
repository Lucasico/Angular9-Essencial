import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Router} from '@angular/router'
import { Product } from '../product.model';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private ProductService: ProductService, private route: Router) { }

  product:Product = {
    name:'',
    price:null
  }

  ngOnInit(): void {
  
  }

  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage(`Produto ${this.product.name} criado com sucesso`)
      this.route.navigate(['products'])
    })
  }

  cancel(): void {
    this.route.navigate(['products'])
  }

}

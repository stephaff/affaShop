import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = []
  spinner = false

  constructor(
    private productServive: ProductsService
  ){}

    ngOnInit(): void {
      this.spinner = true
      this.productServive.getAllProducts().subscribe(product => {
        this.spinner = false
        this.products = product
      })
    }

}

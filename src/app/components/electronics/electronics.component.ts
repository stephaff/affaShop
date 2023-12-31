import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  category = 'electronics'
  products: Product[] = []
  spinner = false

  constructor(
    private productService: ProductsService
  ) {}

  ngOnInit(): void {

    this.update()

  }

  update(){
    this.spinner = true
    this.productService.getProductsCategory(this.category).subscribe(products => {
      this.spinner = false
      this.products = products
    })
  }

}

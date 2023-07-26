import { Component } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {

  category = "women's clothing"
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

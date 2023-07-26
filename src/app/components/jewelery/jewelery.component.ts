import { Component } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent {
  category = 'jewelery'
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

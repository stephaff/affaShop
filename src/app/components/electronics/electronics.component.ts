import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  category!: string | null
  products: Product[] = []
  spinner = false

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {

    this.spinner = true
    this.category = this.route.snapshot.paramMap.get('category')

    if(this.category){
      this.productService.getProductsCategory(this.category).subscribe(products => {
        this.spinner = false
        this.products = products
      })
    }
  }

}

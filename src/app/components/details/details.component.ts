import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id!: string | null
  product!: Product
  spinner = false

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ){}

  ngOnInit(): void {
    this.spinner = true
    this.id = this.route.snapshot.paramMap.get('id')

    if(this.id){
      this.productService.getProduct(this.id).subscribe(product => {
        this.spinner = false
        this.product = product
      })
    }
  }

}

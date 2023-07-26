import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  categories = []

  constructor(
    private productServive: ProductsService
  ){}

  ngOnInit(): void {
    this.productServive.getCategories().subscribe(category => this.categories = category)
  }

}

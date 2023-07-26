import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './services/products.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  categories = []
  @ViewChild(MatSidenav) sidenav!: MatSidenav

  constructor(
    private productServive: ProductsService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.productServive.getCategories().subscribe(category => this.categories = category)
  }

  goTo(category: string){
    console.log(category)
    this.sidenav.close()
    this.router.navigate([`/products/${ category }`])
  }

}

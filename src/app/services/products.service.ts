import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'https://fakestoreapi.com'

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${ this.url }/products`)
  }

  getCategories(): Observable<[]> {
    return this.http.get<[]>(`${ this.url }/products/categories`)
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${ this.url }/products/${ id }`)
  }

  getProductsCategory(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${ this.url }/products/category/${ name }`)
  }

}

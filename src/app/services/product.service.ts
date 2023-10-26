import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://fakestoreapi.com'
  constructor(private http: HttpClient) { }

  getProductsWithLimit(limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?limit=${limit}`)
  }
}

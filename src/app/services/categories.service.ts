import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
Observable
HttpClient
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl = 'https://fakestoreapi.com'
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/products/categories`)
  }
}

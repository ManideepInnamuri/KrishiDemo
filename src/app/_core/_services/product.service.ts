import { Product } from '../../_shared/_models/Product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put(this.baseUrl + 'product/' + id, product);
  }
}

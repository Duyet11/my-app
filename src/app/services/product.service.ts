import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Product, ProductAdmin } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  createProduct(productAdd: { title: string; price: number; description: string; image: string; rate: number; category: string; }) {
    throw new Error('Method not implemented.');
  }
  // call api
  apiUrl = 'https://apipro.netlify.app/.netlify/functions/api/product';

  http = inject(HttpClient); // inject bien http
  constructor() {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductListAdmin(): Observable<ProductAdmin[]> {
    return this.http.get<ProductAdmin[]>(this.apiUrl);
  }
  getOneProduct(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  deleteProductAdmin(id: string): Observable<ProductAdmin[]> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  addProductAdmin(product: any) {
    return this.http.post(`${this.apiUrl}`, product);
  }
  editProduct(product: any) {
    return this.http.put(`${this.apiUrl}/${product.id}`, product);
  }
}

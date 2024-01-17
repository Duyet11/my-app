import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Product, ProductAdmin, ProductAdd, } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductDetail(productId: number) : Observable<Product> {
    throw new Error('Method not implemented.');
  }
  // call api
  apiUrl = 'https://fakestoreapi.com/products';
  apiAdminUrl = 'https://hoadv-nodejs.vercel.app/api/products'; // khai bao apiUrl

  http = inject(HttpClient); // inject bien http
  constructor() {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl); //axios.get(apiUrl)
  }

  getProductListAdmin(): Observable<ProductAdmin[]> {
    return this.http.get<ProductAdmin[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }

  deleteProductById(id: string) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }

  createProduct(product: ProductAdd) {
    return this.http.post<Product>(this.apiAdminUrl, product);
  }
  updateProduct(productId: number, product: ProductAdd): Observable<Product> {
    return this.http.put<Product>(
      this.apiAdminUrl + productId,
      product
    );
  }
}
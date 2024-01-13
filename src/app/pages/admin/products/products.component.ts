import { ProductService } from '../../../services/product.service';
import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductAdmin } from '../../../types/Product';
// import 'react-notifications/lib/notifications.css';




@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor], 
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productService = inject(ProductService);
  productList: ProductAdmin[] = [];

  ngOnInit(): void {
    this.productService
      .getProductListAdmin()
      .subscribe((products) => (this.productList = products)); // callApi.then(cb fuc)
  }
  deleteProduct(productId: string): void {
    this.productService.deleteProductAdmin(productId).subscribe(() => {
      this.productList = this.productList.filter(product => product._id !== productId);
      
    });
  }
  

}

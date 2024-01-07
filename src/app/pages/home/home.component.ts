import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product.service'; // import services
import { Product } from '../../types/Product';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productService = inject(ProductService); // inject vao bien

  ProductList: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getProductList()
      .subscribe((products) => (this.ProductList = products)); // callApi.then(cb fuc)
  }
  //contruct
}

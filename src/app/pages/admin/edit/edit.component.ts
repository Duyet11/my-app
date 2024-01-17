import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductAdd } from '../../../types/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})

export class EditComponent {
  productId: number | undefined;
  product: ProductAdd = {
    title: '',
    description: '',
    image: '',
    category: '',
    price: 0,
    rate: 0,
  };
  

  productService = inject(ProductService);
  router = inject(Router);

  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.productId = param['id']; //return this.getProductById();
      
    });
  }

  // getProductById() {
  //   if (!this.productId) return;
  //   return this.productService
  //     .getProductDetail(this.productId)
  //     .subscribe((product) => (this.product = product));
  // }

  handleSubmit() {
    if (!this.productId) return;
    if (!this.product.title) return alert('Them ten san pham');
    this.productService
      .updateProduct(this.productId, this.product)
      .subscribe(() => this.router.navigate(['/admin/products']));
  }
}

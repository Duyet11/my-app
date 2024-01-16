import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  productId: string | undefined = '1';

  productEdit = {
    title: 'SPA ',
    price: 1,
    description: 'asd',
    image: 'asdasd',
    rate: 3,
  };

  constructor() {
    // call api get
  }

  getProductDetail() {
    if (!this.productId) return;
    //call service ProductDetail(id).subcrib(product => this.productEdit  = product)
  }

  handleSubmit() {
    console.log(this.productId); // lam sao lay dc

    console.log(this.productEdit);
    // call service api POST products
  }
}
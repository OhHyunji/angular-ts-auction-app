import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'auction-home-page',
  template: `
    <div class="row carousel-holder">
      <div class="col-md-12">
        <auction-carousel></auction-carousel>
      </div>
    </div>
    <div class="row">
      <div *ngFor="let product of products" class="col-sm-4 col-lg-4 col-md-4">
        <auction-product-item [product]="product"></auction-product-item>
      </div>
    </div>
  `,
  styleUrls: [ 'app/components/home/home.component.css' ]
})

export default class HomeComponent {
  products : Product[] = [];

  constructor(private productService : ProductService) {
    this.products = productService.getProducts(); //TODO: this.productService?
  }
}
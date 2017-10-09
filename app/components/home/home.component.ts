import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'auction-home-page',
  styleUrls: [ '/home.css' ],
  template: `
    <div class="row carousel-holder">
      <div class="col-md-12">
        <auction-carousel></auction-carousel>
      </div>
    </div>
  `
})
import { Component, Input } from '@angular/core';
import { Product } from 'app/services/product.service';

@Component({
  selector: 'auction-product-item',
  templateUrl: 'app/components/product_item/product_item.component.html'
})
export default class ProductItemComponent {
  @Input() product: Product;
}
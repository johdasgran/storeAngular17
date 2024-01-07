import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.models';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product!: Product;
  @Output() addToCart = new EventEmitter();

  date = new Date().toISOString();

  addToCartHandler(product: Product) {
    this.addToCart.emit(product);
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Porduct } from '../../../shared/models/product.models';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product!: Porduct;

  @Output() addToCart = new EventEmitter();


  addToCartHandler() {
    // console.log('click form child');
    this.addToCart.emit('Hi from child component 👾 ' + this.product.title)
  }


}

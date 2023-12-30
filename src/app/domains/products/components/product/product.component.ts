import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() image: string = '';

  @Output() addToCart = new EventEmitter();


  addToCartHandler() {
    // console.log('click form child');
    this.addToCart.emit('Hi from child component 👾 ' + this.name)
  }


}

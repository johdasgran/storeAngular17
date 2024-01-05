import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() cart: Product[] = []; 

  total = signal(0); 
  
  hideSideMenu = signal(true);

  toggleSideMenu() {
    this.hideSideMenu.update((prevState)=> !prevState);
  }

  ngOnChanges(changes: SimpleChanges){
    const cart = changes['cart'];
    if(cart) {
      this.total.set(this.getTotalPriceCart());
    }

  }


  getTotalPriceCart() {
    const total = this.cart.reduce((total, product)=>{
      return total + product.price;
    }, 0)
    return total;
  }

}

import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.models';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  private cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.total;
  

  hideSideMenu = signal(true);

  toggleSideMenu() {
    this.hideSideMenu.update((prevState)=> !prevState);
  }




}

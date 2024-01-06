import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(()=> {
    const cart = this.cart();
    return cart.reduce((total, product)=> total + product.price, 0);
  })

  constructor() { }

  addProductToCart(product: Product) {
    this.cart.update((prevState)=> [...prevState, product])
  }


}


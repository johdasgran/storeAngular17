import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { Product } from '../../../shared/models/product.models';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CounterComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor(){
    const initStoreProducts = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 300,
        image: 'https://picsum.photos/640/640?r=23',
        date: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 300,
        image: 'https://picsum.photos/640/640?r=23',
        date: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=23',
        date: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 4',
        price: 300,
        image: 'https://picsum.photos/640/640?r=23',
        date: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 5',
        price: 300,
        image: 'https://picsum.photos/640/640?r=23',
        date: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 6',
        price: 300,
        image: 'https://picsum.photos/640/640?r=23',
        date: new Date().toISOString(),
      }
    ];
    this.products.set(initStoreProducts)
  }

  addProductToCart(product: Product) {
    console.log("msg desde el padre: ");
    console.log(product)
    this.cart.update((prevState)=> [...prevState, product])
    console.log(this.cart())
  }




}

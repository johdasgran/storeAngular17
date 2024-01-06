import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CounterComponent } from '@shared/components/counter/counter.component';
import { Product } from '@shared/models/product.models';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CounterComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  products = signal<Product[]>([]);

  ngOnInit() {
    this.productService.getProducts()
    .subscribe({
      next: (products)=> {
        this.products.set(products);
      },
      error: (error)=> console.error(error),
      complete: ()=> console.log("completed :)")
    })
  }


  addProductToCart(product: Product) {
    this.cartService.addProductToCart(product);
  }




}

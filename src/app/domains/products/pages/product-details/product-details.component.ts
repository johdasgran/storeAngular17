import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.models';
import { ProductService } from '@shared/services/product.service';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export default class ProductDetailsComponent {

  private productService = inject(ProductService);
  private cartService = inject(CartService)

  @Input() id!: string;
  
  productDetails = signal<Product | null>(null); 
  cover = signal<String>('');

  ngOnInit() {
    this.productService.getProduct(this.id).subscribe({
      next: (product) => {
        this.productDetails.set(product)
        if(product.images.length > 0) {
          this.cover.set(product.images[0])
        }
      },
      error: (error) => console.log(error),
      complete: ()=> console.log('get product succesfull')
    });
  }

  changeCoverImage(imageUrl: string) {
    this.cover.set(imageUrl);
  }

  addToCartProduct() {
    const product = this.productDetails(); 
    if(product) {
      this.cartService.addProductToCart(product);
    }
  }


}

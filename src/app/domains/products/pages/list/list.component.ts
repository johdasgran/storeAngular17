import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CounterComponent } from '@shared/components/counter/counter.component';
import { Product  } from '@shared/models/product.models';
import { Category } from '@shared/models/category.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoriesService } from '@shared/services/categories.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CounterComponent, HeaderComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoriesService = inject(CategoriesService);

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  @Input() category_id!: string;

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts();
  }

  addProductToCart(product: Product) {
    this.cartService.addProductToCart(product);
  }


  private getProducts() {
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products)=> {
        this.products.set(products);
      },
      error: (error)=> console.error(error),
      complete: ()=> console.log("completed :)")
    })
  }

  private getCategories() {
    this.categoriesService.getCategories()
    .subscribe({
      next: (category)=> {
        this.categories.set(category);
      },
      error: (error)=> console.error(error),
      complete: ()=> console.log("completed :)")
    })
  }



}

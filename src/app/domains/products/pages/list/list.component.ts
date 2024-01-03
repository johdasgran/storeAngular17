import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { Porduct } from '../../../shared/models/product.models';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CounterComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<Porduct[]>([
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
  ]);


  printMessageFromChild(event: string) {
    console.log("msg desde el padre: ")
    console.log(event)
  }




}

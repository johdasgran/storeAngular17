import { Component } from '@angular/core';

import { ProductComponent } from '../../components/product/product.component';
import { CounterComponent } from '../../../shared/components/counter/counter.component';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CounterComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {


  printMessageFromChild(event: string) {
    console.log("msg desde el padre: ")
    console.log(event)
  }




}

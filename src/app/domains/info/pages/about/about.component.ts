import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  duration = signal(1000);
  message = signal('Hello Johan :)');


  changeDuration(event: Event) {
    const newDuration = event.target as HTMLInputElement;
    this.duration.set(newDuration.valueAsNumber);
  }

  changeMeesage(event: Event) {
    const newMessage = event.target as HTMLInputElement;
    this.message.set(newMessage.value)
  }




}

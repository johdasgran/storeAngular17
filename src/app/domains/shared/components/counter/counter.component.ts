import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Input() duration: number = 0;
  @Input() message: string = '';

  counter = signal(0);
  counterRef!: number;

  

  constructor() {
    // NO ASYNC
    // Before render
    // once time
    console.log("I'm the constructor");
    console.log('_'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('_'.repeat(10));
    console.log(changes)

    const changesDuration = changes['duration'];
    
    if(changes.hasOwnProperty('duration')) {
      console.log("hehehe", changes.hasOwnProperty('duration'))
    }

    if(changesDuration && changesDuration.currentValue !== changesDuration.previousValue) {
      console.log("El valor cambio", changesDuration.currentValue);
    }

  }

  ngOnInit() {
    // before render and during render
    // once time
    // asyn, then subscribe
    console.log('OnInit');
    console.log('_'.repeat(10));
    console.log('duration state => ' + this.duration);
    console.log('message state => ' + this.message);


    if(typeof window !== undefined) {
      this.counterRef = window.setInterval(()=>{
        this.counter.update(prevState=>prevState+1);
        console.log(this.counter());
      },1000)
    }

  
      



  }

  ngAfterViewInit() {
    // after
    // children already have rendered
    console.log('ngAfterViewInit');
    console.log('_'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('_'.repeat(10));

    if(typeof window !== undefined) {
      clearInterval(this.counterRef);
    }

  }


  doSomething() {
    console.log("He he cambio d¿uration heh");
  }


}

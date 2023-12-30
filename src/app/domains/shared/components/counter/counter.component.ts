import { Component, Input, SimpleChanges } from '@angular/core';

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
  }

  ngOnInit() {
    // before render and during render
    // once time
    // asyn, then subscribe
    console.log('OnInit');
    console.log('_'.repeat(10));
    console.log('duration state => ' + this.duration);
    console.log('message state => ' + this.message);
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
  }



}

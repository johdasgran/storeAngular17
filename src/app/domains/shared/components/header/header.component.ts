import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  hideSideMenu = signal(true);

  toggleSideMenu() {
    console.log(this.hideSideMenu());
    this.hideSideMenu.update((prevState)=> !prevState);
    console.log(this.hideSideMenu());

  }

}

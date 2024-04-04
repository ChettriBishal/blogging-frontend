import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/home']
      },
      {
        label: 'About',
        routerLink: ['/about']
      },
      {
        label: 'Services',
        routerLink: ['/services']
      },
      {
        label: 'Contact',
        routerLink: ['/contact']
      }
    ];
  }
}

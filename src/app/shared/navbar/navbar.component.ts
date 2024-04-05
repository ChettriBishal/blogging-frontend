import { Component, inject } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { AuthenticationService } from '../../auth/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[];
  isLoggedIn: boolean = false;
  userName: string;
  authService = inject(AuthenticationService);
  router = inject(Router);


  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });

    this.authService.userName$.subscribe(username => {
      this.userName = username;
    });

    this.isLoggedIn = this.authService.isUserLoggedIn(); // check if the jwt is active

    console.log(this.isLoggedIn);
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

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.isLoggedIn = false;
  }
}

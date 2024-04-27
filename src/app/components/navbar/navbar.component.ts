import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  items: MenuItem[];
  isLoggedIn$: Observable<boolean>;
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  logout() {
    this.authService.logout();
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      this.createMenuItems();
    });

    this.items = [
      {
        label: 'Home'
      },
      {
        label: 'About'
      },
      {
        label: 'Contact'
      },
    ];
  }

  
  createMenuItems(): void {
    this.isLoggedIn$.subscribe((isLoggedIn) => {
      // this.items = [];
      if (isLoggedIn) {
        this.items.push({
          label: 'Post',
          routerLink: 'new-blog',
        });
      }
    });
  }
}

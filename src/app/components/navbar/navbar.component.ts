import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

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
    this.router.navigate(['/auth/login']);
  }

  ngOnInit() {
    this.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      this.items = this.createMenuItems();
    });

    this.items = [
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }

  createMenuItems(): MenuItem[] {
    const usualStuff = [
        {
            label: 'Blogger'
        },
    ]
    const logoutButton = this.isLoggedIn
      ? ({ label: 'Logout' })
      : ({ label: 'Login' });

    const postButton = this.isLoggedIn ? ({ label: 'Post' }) : null;

    return [usualStuff, logoutButton, postButton];
  }

   
}


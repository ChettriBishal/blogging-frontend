import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ){}


  logout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  navigateToHome() {
    this.router.navigate(['/blogs']);
  }

  navigateToNewPost() {
    this.router.navigate(['/new-blog']);
  }
}

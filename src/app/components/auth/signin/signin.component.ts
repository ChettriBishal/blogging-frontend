import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}


  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log(response.access_token);
        this.authService.isLoggedIn$.next(true);

        sessionStorage.setItem('access_token', response.access_token);
        sessionStorage.setItem('refresh_token', response.refresh_token);
        this.messageService.add({
          severity: 'success',
          summary: 'Login Successful!',
          detail: 'You are now logged in.',
        });

        // this.authService.setLoggedIn(true);
        this.router.navigate(['/blogs']);
      },
      (error) => {
        console.log(error.status);
        if (error.status === 401) {
          this.messageService.add({
            severity: 'error',
            summary: 'Login Failed',
            detail: 'Please check your username and password.',
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Login Error',
            detail: 'An error occurred. Please try again later.',
          });
        }
      }
    );
  }
}

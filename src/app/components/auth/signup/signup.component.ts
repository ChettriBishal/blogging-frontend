import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  username: string;
  password: string;
  email: string;
  isValidEmail: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  navigateToSignIn() {
    this.router.navigate(['/signin']);
  }

  signup() {
    this.authService
      .signUp(this.username, this.password, this.email)
      .subscribe({
        next: () => {
          this.showSuccessToast();
          this.router.navigate(['/login']); // direct user to login page
        },
        error: () => {
          this.showErrorToast('Something went wrong');
        },
      });
  }

  showSuccessToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success!',
      detail: 'You have successfully signed up!',
    });
  }

  showErrorToast(errorMessage: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error!',
      detail: errorMessage,
    });
  }
}

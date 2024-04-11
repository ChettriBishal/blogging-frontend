import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [MessageService]
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
  ){}


  signup(){
    console.log('inside signup');
    console.log(this.username);
    this.authService.signUp(this.username, this.password, this.email).subscribe({
      next: () => {
          this.router.navigate(['/login']); // direct user to login page
          this.showSuccessToast();
      },
      error: () => {
          this.showErrorToast('Something went wrong');
      }
    });
  }

  showSuccessToast() {
     this.messageService.add(
      {
        severity:'success', 
        summary: 'Success!',
        detail: 'You have successfully signed up!'
      }
    );
  }

  showErrorToast(errorMessage: string) {
    this.messageService.add(
      {
        severity:'error', 
        summary: 'Error!', 
        detail: errorMessage
      }
    );
  }

}

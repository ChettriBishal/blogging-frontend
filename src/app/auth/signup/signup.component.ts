import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string;
  password: string;
  email: string;
  isValidEmail: boolean = true;

  constructor(private authService: AuthenticationService, private router: Router){}

  onSubmit() {
    // Handle form submission here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Email:', this.email);
  }

  signup(){
    console.log('inside signup');
    console.log(this.username);
    this.authService.signUp(this.username, this.password, this.email).subscribe(
        () =>{
          this.router.navigate(['Login']); // direct user to login page
        },
        error => {
          alert('Something went wrong');
        }
    );
  }

  isValidEmailFn(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }

  // Update isValidEmail property on email input change
    onEmailChange(email: string) {
    this.isValidEmail = this.isValidEmailFn(email);
  }


}

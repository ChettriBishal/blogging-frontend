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

  constructor(private authService: AuthenticationService, private router: Router){}

  onSubmit() {
    // Handle form submission here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Email:', this.email);
  }

  signup(){
    this.authService.signUp(this.username, this.password, this.email).subscribe(
        () =>{
          this.router.navigate(['Login']); // direct user to login page
        },
        error => {
          alert('Something went wrong');
        }
    );
  }
}

import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthenticationService, 
    private router: Router,
    private messageService: MessageService
    ){}

  login(){
    this.authService.login(this.username, this.password).subscribe(
        (response) =>{
          console.log(response.access_token);

          sessionStorage.setItem('access_token', response.access_token);
          sessionStorage.setItem('refresh_token',response.refresh_token);
          this.messageService.add({ severity: 'success', summary: 'Login Successful!', detail: 'You are now logged in.' });

          this.authService.setLoggedIn(true);
          this.authService.setUserName(this.username);
          this.router.navigate(['']); // navigate to the home screen
        },
        error => {
          console.log('here');
          // display a toast that wrong password
            console.log('here');
            console.log(error.status);
            if (error.status === 401) { // Check for specific error code (e.g., 401 for Unauthorized)
              this.messageService.add({ severity: 'error', summary: 'Login Failed', detail: 'Please check your username and password.' });
            } else {
              this.messageService.add({ severity: 'error', summary: 'Login Error', detail: 'An error occurred. Please try again later.' });
            }
        }
    );
  }
}

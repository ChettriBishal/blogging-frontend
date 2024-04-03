import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router){}

  login(){
    this.authService.Login(this.username, this.password).subscribe(
        (response) =>{
          console.log(response.access_token);
          sessionStorage.setItem('access_token', response.access_token);
          sessionStorage.setItem('refresh_token',response.refresh_token);
          this.router.navigate(['']);
        },
        error => {
          alert('Something went wrong');
        }
    );
  }
}

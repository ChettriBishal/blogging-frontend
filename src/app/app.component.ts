import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogging-frontend';
  isLoggedIn = false;
  
  constructor(private authService: AuthService){}
  
  ngOnInit() {
    this.authService.checkIfLoggedIn();
    this.isLoggedIn = this.authService.isLoggedIn$.value;
    console.log('is loggedin ' + this.isLoggedIn);
  }

}

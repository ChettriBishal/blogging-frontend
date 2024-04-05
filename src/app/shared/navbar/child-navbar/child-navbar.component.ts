import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../../../auth/services/authentication.service';

@Component({
  selector: 'app-child-navbar',
  templateUrl: './child-navbar.component.html',
  styleUrl: './child-navbar.component.css'
})
export class ChildNavbarComponent {

  constructor(private authService: AuthenticationService) {}

  @Input() isLoggedIn: boolean;
  @Input() currentUserName: string;

  currentUserId = this.authService.getCurrentUser();

}

import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input() user: any; // Input to receive user data

  constructor(private userService: UserService) { } // Inject user service

  ngOnInit() {
    // If user data is not provided through @Input, fetch it from service
    if (!this.user) {
      this.userService.getCurrentUser().subscribe(user => {
        this.user = user;
      });
    }
  }


}

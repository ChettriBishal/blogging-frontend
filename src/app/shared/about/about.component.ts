import { Component } from '@angular/core';
interface TeamMember {
  imageUrl: string;
  name: string;
  title: string;
  bio: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    websiteName = 'Blogger'; 
    missionStatement = 'Think Deeply. Think Again.'; 

    
    team: TeamMember[] = [
      // Define each team member object here
      {
        imageUrl: 'https://pbs.twimg.com/profile_images/1760675306170728450/YvYG2C3-_400x400.jpg',
        name: 'Bishal',
        title: 'Blogging Operations',
        bio: 'Intern at WatchGuard Technologies'
      },
      
      {
        imageUrl: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Chimee',
        title: 'Blogging Review',
        bio: 'CS Undergrad at SMIT'
      },
      {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1665203496320-7059f7993a39?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      
        name: 'Pema',
        title: 'Blogging Review',
        bio: 'Class 12, Holy Cross, Gangtok'
      },
      // Add more team members following the same structure
    ];

  constructor() { }

}

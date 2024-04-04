import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface Contact {
  name: string;
  email: string;
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent {

  contacts: Contact[] = [
    { name: 'Bishal Chettri', email: 'Bishal.Chettri@watchguard.com', title: 'Blogging Operations', imageUrl: 'https://pbs.twimg.com/profile_images/1760675306170728450/YvYG2C3-_400x400.jpg' 
  },
    { name: 'Pema Zangmu', email: 'pemachz@gmail.com', title: 'Blogging Review', imageUrl: 'https://plus.unsplash.com/premium_photo-1665203496320-7059f7993a39?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    { name: 'Chimee Palzor', email: 'chimeez@gmail.com', title: 'Blogging Review', 
    imageUrl: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
  ];

  constructor(private messageService: MessageService) { }

  sendEmail(email: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Email Sent',
      detail: `An email has been sent to ${email}.`
    });
  }
  
}

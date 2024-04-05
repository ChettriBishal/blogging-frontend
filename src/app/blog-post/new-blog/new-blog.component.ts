import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthenticationService } from '../../auth/services/authentication.service';
import { MessageService } from 'primeng/api';
import { NewBlog } from './new-blog.model';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css'
})
export class NewBlogComponent {
  newBlog: NewBlog;
  submitted = false;
  currentUserId = this.authService.getCurrentUser();
  apiEndpoint = 'http://localhost:5000/'; // Replace with your actual endpoint

  constructor(private http: HttpClient,
     private authService: AuthenticationService,
     private messageService: MessageService,
     private blogPostService: BlogPostService
    ) { }

  ngOnInit() {
    // Initialize newBlog object with default values (optional)
    this.newBlog = {
      title: '',
      content: '',
      creator_id: this.currentUserId, // Replace with actual creator ID
      upvotes: 0,
      tagname: ''
    };
  }

  onSubmit() {
    this.submitted = true;
    // Validate form data before sending the request (optional)


  }

  validateForm(): boolean {
    // Implement form validation logic here
    // Check for empty fields, minimum lengths, etc.
    // Return true if valid, false if invalid
    return true; 
  }
}


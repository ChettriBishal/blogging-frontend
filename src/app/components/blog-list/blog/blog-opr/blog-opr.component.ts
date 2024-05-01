import { Component, Input } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { BlogService } from '../../../../services/blog/blog.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-opr',
  templateUrl: './blog-opr.component.html',
  styleUrl: './blog-opr.component.css',
})
export class BlogOprComponent {
  @Input() currentBlogUser: number;
  @Input() blogId: number;
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private blogService: BlogService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  checkAuthor() {
    /* To check if the blog author is the same as the current logged in user*/
    let currentLoggedInUser = this.authService.getUserId();
    return currentLoggedInUser === this.currentBlogUser;
  }

  showSuccessToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success!',
      detail: 'Blog removed successfully!',
    });
  }

  showErrorToast() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error!',
      detail: 'Could not remove the blog',
    });
  }

  onDelete() {
    const confirmDelete = confirm('Are you sure you want to delete this blog?');
    if (confirmDelete) {
      this.blogService.deleteBlog(this.blogId);
    }
  }
}

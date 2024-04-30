import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewBlog } from '../../models/new-blog.model';
import { AuthService } from '../../services/auth/auth.service';
import { BlogService } from '../../services/blog/blog.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css'],
})
export class BlogEditorComponent {

  authService = inject(AuthService);
  blogService = inject(BlogService);
  router = inject(Router);
  messageService = inject(MessageService);

  // formTitle = 'New Blog';
  postData: NewBlog = {
    title: '',
    content: '',
    creator_id: this.authService.getUserId(),
    tagname: '',
  };

  saveBlogPost(form: NgForm): void {
    if (form.valid) {
      this.blogService.createBlog(this.postData).subscribe((response: any) => {
        if(response.blogId) {
          this.router.navigate(['/blogs/', response.blogId]);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Blog added successfully',
          });
        } else {
            this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Blog could not be added',
          });
        }
      });
      form.resetForm();
    }  
  }

  navigateToHome(): void {
    this.router.navigate(['/blogs']);
  }
}

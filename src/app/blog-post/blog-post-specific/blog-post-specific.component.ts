import { Component } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../auth/services/authentication.service';

@Component({
  selector: 'app-blog-post-specific',
  templateUrl: './blog-post-specific.component.html',
  styleUrl: './blog-post-specific.component.css'
})
export class BlogPostSpecificComponent {
  blogs : BlogPost[];
  cardWidth: '300px';


  constructor(private blogPostService: BlogPostService, 
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getPostsByUser(this.authService.getCurrentUser());
    this.blogPostService.getBlogPosts().subscribe(
      blogs => this.blogPostService.setBlogs(blogs)
    );
    
  }

  getPostsByUser(user_id: number): void {
    this.blogPostService.getBlogPlostsByUserId(user_id)
      .subscribe(posts => this.blogs = posts);
  }

   openBlogDetail(blog: BlogPost) {
    this.router.navigate(['/blogs/', blog.blog_id]); // Navigate to detail route with blog id
  }

}



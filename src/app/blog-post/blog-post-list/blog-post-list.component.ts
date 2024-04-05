import { Component } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrl: './blog-post-list.component.css'
})
export class BlogPostListComponent {
  blogs : BlogPost[];
  cardWidth: '300px';

  constructor(private blogPostService: BlogPostService, private router: Router) { }

  ngOnInit() {
    this.getPosts();
    this.blogPostService.getBlogPosts().subscribe(
      blogs => this.blogPostService.setBlogs(blogs)
    );
    
  }

  getPosts(): void {
    this.blogPostService.getBlogPosts()
      .subscribe(posts => this.blogs = posts);
  }

   openBlogDetail(blog: BlogPost) {
    this.router.navigate(['/blogs/', blog.blog_id]); // Navigate to detail route with blog id
  }

}

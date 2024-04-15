import { Component } from '@angular/core';
import { BlogPost } from '../../models/blog.model';
import { BlogPostService } from '../../services/blog/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {
  blogs: BlogPost[];
  cardWidth: number;

  constructor(
    private blogPostService: BlogPostService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPosts();
    this.blogPostService
      .getBlogPosts()
      .subscribe((blogs) => this.blogPostService.setBlogs(blogs));
  }

  getPosts(): void {
    this.blogPostService
      .getBlogPosts()
      .subscribe((posts) => (this.blogs = posts));
  }

  openBlogDetail(blog: BlogPost) {
    console.log('blog details here');
    this.router.navigate(['/blogs/', blog.blog_id]);
  }
}

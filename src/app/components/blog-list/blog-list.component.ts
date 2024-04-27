import { Component } from '@angular/core';
import { BlogPost } from '../../models/blog.model';
import { BlogService } from '../../services/blog/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {
  blogs: BlogPost[];
  cardWidth: number;

  constructor(
    private blogPostService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
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

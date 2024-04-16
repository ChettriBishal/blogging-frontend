import { Component } from '@angular/core';
import { BlogPost } from '../../../models/blog.model';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  selectedBlog: BlogPost | null = null;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    // Access blog id from route params
    const blogId = this.route.snapshot.paramMap.get('blog_id');

    console.log(blogId);

    if (blogId) {
      // Use the service to retrieve blog details based on id
      console.log(`Blog Id ${blogId}`);

      this.blogService
        .getBlogPost(+blogId) // Convert 'id' to a number
        .subscribe((blogPost) => (this.selectedBlog = blogPost));
    }
  }
}

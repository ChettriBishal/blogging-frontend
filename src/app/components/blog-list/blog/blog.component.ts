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
    const blogId = this.route.snapshot.paramMap.get('blog_id');

    console.log(blogId);

    if (blogId) {
      console.log(`Blog Id ${blogId}`);

      this.blogService
        .getBlogPost(+blogId)
        .subscribe((blogPost) => (this.selectedBlog = blogPost));
    }
  }
}

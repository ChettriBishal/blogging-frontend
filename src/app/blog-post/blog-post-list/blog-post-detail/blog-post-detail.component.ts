import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../blog-post.model';
import { BlogPostService } from '../../services/blog-post.service';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrl: './blog-post-detail.component.css'
})
export class BlogPostDetailComponent {
  selectedBlog: BlogPost | null = null;

  constructor(private route: ActivatedRoute, private blogService: BlogPostService) {}


  ngOnInit() {
    // Access blog id from route params
    const blogId = this.route.snapshot.paramMap.get('blog_id');

    console.log(blogId);
    
    if (blogId) {
      // Use the service to retrieve blog details based on id
      console.log(`Blog Id ${blogId}`);

      this.blogService.getBlogPost(+blogId) // Convert 'id' to a number
        .subscribe(
          (blogPost) => (this.selectedBlog = blogPost),
        ); 
    }
  }

}

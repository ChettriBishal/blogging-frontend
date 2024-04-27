import { Component } from '@angular/core';
import { BlogPost } from '../../../models/blog.model';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog/blog.service';
import { CommentService } from '../../../services/comment/comment.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  selectedBlog: BlogPost | null = null;
  blogId: number;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.blogId = +this.route.snapshot.paramMap.get('blog_id');

    if (this.blogId) {
      console.log(`Blog Id ${this.blogId}`);

      this.blogService
        .getBlogPost(this.blogId)
        .subscribe((blogPost) => (this.selectedBlog = blogPost));
    }
  }

  onAddComment(comment: string) {
    console.log('inside add comment in blog componnent');
    this.commentService.addCommentForBlog(this.blogId, comment);
  }
}

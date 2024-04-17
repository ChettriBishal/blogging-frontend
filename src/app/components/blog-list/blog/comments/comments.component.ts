import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../../../services/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  comments: any[] = [];
  blogId: number;

  constructor(private commentService: CommentService, private route: ActivatedRoute) {}
  

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = +params.get('blog_id');
      this.fetchComments();
    });
  }

  fetchComments() {
      this.commentService
        .getCommentsForBlog(this.blogId) 
        .subscribe((response: any) => {
          this.comments = response;
        });
  }
}

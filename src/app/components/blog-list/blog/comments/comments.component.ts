import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../../../services/comment/comment.service';
import { AuthService } from '../../../../services/auth/auth.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  comments: any[] = [];
  comment: string = '';
  blogId: number;
  isTextAreaEmpty = true;

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

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

  saveComment(): void {
    console.log('inside save comment');
    if (this.comment.trim() === '') {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Comment cannot be empty',
      });
      return;
    }

    this.commentService
      .addCommentForBlog(this.blogId, this.comment)
      .subscribe(() => {
        this.fetchComments();
        // this.router.navigate(['/blogs', this.blogId]);
      });
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Comment added successfully',
    });

    this.comment = '';
    this.isTextAreaEmpty = true;
  }

  onTextAreaChange() {
    this.isTextAreaEmpty = this.comment.trim().length === 0;
  }
}

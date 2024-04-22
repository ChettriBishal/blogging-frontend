import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css',
})
export class AddCommentComponent {
  comment: string = '';
  @Input() blogId: number;

  @Output() addComment = new EventEmitter<string>();

  onSubmit() {
    this.addComment.emit(this.comment);
    this.comment = '';
  }
}

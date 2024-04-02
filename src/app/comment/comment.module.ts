import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';



@NgModule({
  declarations: [
    CommentFormComponent,
    CommentListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentModule { }

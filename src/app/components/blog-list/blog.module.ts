import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogListComponent } from './blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { BlogComponent } from './blog/blog.component';
import { CommentsComponent } from './blog/comments/comments.component';
import { FormsModule } from '@angular/forms';
import { AddCommentComponent } from './blog/add-comment/add-comment.component';
import { NavComponent } from '../nav/nav.component';




@NgModule({
  declarations: [
    BlogCardComponent,
    BlogListComponent,
    BlogComponent,
    CommentsComponent,
    AddCommentComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CardModule,
    ImageModule,
    FormsModule
  ],
  exports: [
    BlogCardComponent,
    BlogListComponent
  ]
})
export class BlogModule{ }
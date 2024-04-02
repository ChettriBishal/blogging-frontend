import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './post-form/post-form.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostDetailComponent } from './blog-post-list/blog-post-detail/blog-post-detail.component';
import { BlogPostFormComponent } from './blog-post-form/blog-post-form.component';



@NgModule({
  declarations: [
    PostFormComponent,
    BlogPostListComponent,
    BlogPostDetailComponent,
    BlogPostFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogPostModule { }

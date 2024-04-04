import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostDetailComponent } from './blog-post-list/blog-post-detail/blog-post-detail.component';
import { BlogPostFormComponent } from './blog-post-form/blog-post-form.component';
import { BlogPostRoutingModule } from './blog-post-routing.module';



@NgModule({
  declarations: [
    BlogPostListComponent,
    BlogPostDetailComponent,
    BlogPostFormComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    BlogPostRoutingModule
  ]
})
export class BlogPostModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogListComponent } from './blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { BlogComponent } from './blog/blog.component';
import { CommentsComponent } from './blog/comments/comments.component';




@NgModule({
  declarations: [
    BlogCardComponent,
    BlogListComponent,
    BlogComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CardModule,
    ImageModule
  ],
  exports: [
    BlogCardComponent,
    BlogListComponent
  ]
})
export class BlogModule{ }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { Panel, PanelModule } from 'primeng/panel';
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';

import { EditorModule } from 'primeng/editor';

import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostDetailComponent } from './blog-post-list/blog-post-detail/blog-post-detail.component';
import { BlogPostRoutingModule } from './blog-post-routing.module';
import { BlogPostSpecificComponent } from './blog-post-specific/blog-post-specific.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogPostListComponent,
    BlogPostDetailComponent,
    BlogPostSpecificComponent,
    NewBlogComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    MessageModule,
    PanelModule,
    ImageModule,
    TabViewModule,
    EditorModule,
    BlogPostRoutingModule
  ]
})
export class BlogPostModule { }

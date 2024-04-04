import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { Panel, PanelModule } from 'primeng/panel';
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';

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
    MessageModule,
    PanelModule,
    ImageModule,
    TabViewModule,
    BlogPostRoutingModule
  ]
})
export class BlogPostModule { }

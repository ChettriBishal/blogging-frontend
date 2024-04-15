import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogListComponent } from './blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CardModule } from 'primeng/card';




@NgModule({
  declarations: [
    BlogCardComponent,
    BlogListComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CardModule
  ],
  exports: [
    BlogCardComponent,
    BlogListComponent
  ]
})
export class BlogModule{ }
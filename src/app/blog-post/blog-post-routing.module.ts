import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostDetailComponent } from './blog-post-list/blog-post-detail/blog-post-detail.component';
import { BlogPostSpecificComponent } from './blog-post-specific/blog-post-specific.component';
 
const routes: Routes = [
  {
    path: '',
    children: [{ path: 'blogs', component: BlogPostListComponent}],
  },
  {
    path:'blogs/:blog_id', component: BlogPostDetailComponent, pathMatch: 'full'
  },
  {
    path: 'users/:user_id/blogs', component: BlogPostSpecificComponent, pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPostRoutingModule{}
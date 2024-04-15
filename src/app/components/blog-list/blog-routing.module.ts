import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'blogs', component: BlogListComponent }],
  },
  //   {
  //     path:'blogs/:blog_id', component: BlogPostDetailComponent, pathMatch: 'full'
  //   },
  //   {
  //     path: 'users/:user_id/blogs', component: BlogPostSpecificComponent, pathMatch: 'full'
  //   },
  //   {
  //     path: 'add-blog', component: NewBlogComponent, pathMatch: 'full'
  //   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

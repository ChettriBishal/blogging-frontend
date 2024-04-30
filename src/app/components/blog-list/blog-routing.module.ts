import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { BlogEditorComponent } from '../blog-editor/blog-editor.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'blogs', component: BlogListComponent }],
  },
  {
    path: 'blogs/:blog_id',
    component: BlogComponent,
    pathMatch: 'full',
  },
  { path: 'new-blog', component: BlogEditorComponent, pathMatch: 'full' },
  // {
  //   path: 'users/:user_id/blogs', component: BlogListComponent, pathMatch: 'full'
  // },
  //   {
  //     path: 'add-blog', component: NewBlogComponent, pathMatch: 'full'
  //   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

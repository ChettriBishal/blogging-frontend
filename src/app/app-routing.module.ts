import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthModule } from './auth/auth.module';
import { BlogPostListComponent } from './blog-post/blog-post-list/blog-post-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // {path: 'blogs', component: BlogPostListComponent, pathMatch: 'full'},
  {
    path: '', // for auth related (login and signup)
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () =>
      import('./components/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },
  { path: 'new-blog', component: BlogEditorComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

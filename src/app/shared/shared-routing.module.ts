import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const SHARED_ROUTES: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
];
@NgModule({
  imports: [RouterModule.forChild(SHARED_ROUTES)],
  exports: [RouterModule],
})
export class SharedRouteModule{}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';

const USER_ROUTES: Routes = [
  { path: 'users/:id', component: UserProfileComponent},
];
@NgModule({
  imports: [RouterModule.forChild(USER_ROUTES)],
  exports: [RouterModule],
})
export class AuthRouteModule {}
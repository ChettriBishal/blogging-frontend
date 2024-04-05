import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { UserRouteModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
  
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserRouteModule,
    CardModule
  ],
  exports:[
  ]
})
export class UserModule { }

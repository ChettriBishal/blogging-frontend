import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule} from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
  
    SigninComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    PasswordModule
  ],
  exports:[
    SigninComponent
  ],
})
export class AuthModule { }
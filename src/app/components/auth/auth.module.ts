import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PasswordModule
  ],
  exports:[
    SigninComponent,
    SignupComponent
  ],
})
export class AuthModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from './primeng/primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthModule } from './components/auth/auth.module';
import { PostCommentComponent } from './components/post-comment/post-comment.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { BlogModule } from './components/blog-list/blog.module';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogEditorModule } from './components/blog-editor/blog-editor.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostCommentComponent,
    CommentListComponent,
    LoginComponent,
    SignupComponent,
    BlogEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CKEditorModule,
    PrimeNgModule,
    AuthModule,
    BlogModule,
    BlogEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

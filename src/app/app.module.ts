import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { PrimeNgModule } from './primeng/primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthModule } from './components/auth/auth.module';
import { PostCommentComponent } from './components/post-comment/post-comment.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { BlogModule } from './components/blog-list/blog.module';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogEditorModule } from './components/blog-editor/blog-editor.module';
import { CommentsModule } from './components/blog-list/blog/comments/comments.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostCommentComponent,
    LoginComponent,
    SignupComponent,
    BlogEditorComponent,
    FooterComponent,
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
    BlogEditorModule,
    CommentsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

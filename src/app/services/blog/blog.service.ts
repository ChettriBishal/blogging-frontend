import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { BlogPost } from '../../models/blog.model';
import { NgForm } from '@angular/forms';
import { NewBlog } from '../../models/new-blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}


  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.apiUrl}/blogs`);
  }

  getBlogPostsByUserId(user_id: number): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.apiUrl}/users/${user_id}/blogs`);
  }

  getBlogPost(id: number): Observable<BlogPost> {
    const url = `${this.apiUrl}/blogs/${id}`;
    return this.http.get<BlogPost>(url);
  }

  private blogsSubject = new BehaviorSubject<BlogPost[]>([]);
  blogs$: Observable<BlogPost[]> = this.blogsSubject.asObservable();

  setBlogs(blogs: BlogPost[]) {
    this.blogsSubject.next(blogs);
  }

  getBlogPlostsByUserId(userId: number): Observable<BlogPost[]> {
    const url = `/users/${userId}/blogs`;
    return this.http.get<BlogPost[]>(url);
  }


  createBlog(blog: NewBlog) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${sessionStorage.getItem('access_token')}`
    );

    return this.http.post<BlogPost>(`${this.apiUrl}/users/${blog.creator_id}/blogs`, blog, {
      headers,
    });
  }
}
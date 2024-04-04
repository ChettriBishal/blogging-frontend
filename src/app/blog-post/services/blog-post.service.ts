import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('/posts');
  }
}
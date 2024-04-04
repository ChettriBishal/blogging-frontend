import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { BlogPost } from '../blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  private apiUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.apiUrl}/blogs`);
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

}
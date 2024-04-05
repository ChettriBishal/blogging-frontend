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


  /*GET methods here */

  getBlogPosts(): Observable<BlogPost[]> {
    /* Get all blog posts */
    return this.http.get<BlogPost[]>(`${this.apiUrl}/blogs`);
  }

  getBlogPostsByUserId(user_id: number): Observable<BlogPost[]> {
    /* Get blog posts by UserId */
    return this.http.get<BlogPost[]>(`${this.apiUrl}/users/${user_id}/blogs`);
  }
  
  getBlogPost(id: number): Observable<BlogPost> {
    /* Get a single blog post */
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



  /*POST methods here */
  
  createBlog(blog: BlogPost){
    // do something
  }

}
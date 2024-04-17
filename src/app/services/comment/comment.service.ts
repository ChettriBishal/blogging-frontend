import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService{
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getCommentsForBlog(blogId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blogs/${blogId}/comments`);
  }

}

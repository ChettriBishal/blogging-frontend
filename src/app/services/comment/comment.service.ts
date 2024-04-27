import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getCommentsForBlog(blogId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blogs/${blogId}/comments`);
  }

  addCommentForBlog(blogId: number, comment: string): Observable<any> {
    console.log('add comment');

    const bearerToken = sessionStorage.getItem('access_token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${bearerToken}`,
    });
    const jsonData = {
      'content': comment,
    };
    const link = `${this.apiUrl}/blogs/${blogId}/comments`;
    console.log(link);

    return this.http.post<any>(
      `${this.apiUrl}/blogs/${blogId}/comments`,
      jsonData,
      {
        headers,
      }
    );
  }
}

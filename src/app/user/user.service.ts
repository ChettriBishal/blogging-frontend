import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('access_token')}`); // Assuming access_token is stored in sessionStorage

    return this.http.get<any>(this.apiUrl + '/user', { headers });
  }
}

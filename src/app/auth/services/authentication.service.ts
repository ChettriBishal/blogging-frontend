import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError } from 'rxjs';
import { tap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:5000'; //  API endpoint for user authentication

  constructor(private http: HttpClient) {}

  Login(username: string, password: string): Observable<any> {
    console.log('login request made');
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });

    }

}
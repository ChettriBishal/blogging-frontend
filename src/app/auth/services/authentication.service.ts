import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError } from 'rxjs';
import { tap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http';
import { LoginErrorResponse, LoginSuccessReponse } from '../auth-response.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:5000'; //  API endpoint for user authentication

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    /*Service to handle login */
    console.log('login request made');
    return this.http.post<LoginErrorResponse | LoginSuccessReponse>(`${this.apiUrl}/login`, { username, password });
  }

  signUp(username: string, password: string, email: string): Observable<any> {
    /*Service to enable user to signup */
    console.log('signup request made');
    return this.http.post<any>(`${this.apiUrl}/signup`, {username, password, email});
  }
  
  isLoggedIn(): boolean {
    /* To check if the user is logged in */
    return !!sessionStorage.getItem('access_token');
  }

}
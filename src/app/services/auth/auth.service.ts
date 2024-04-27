import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  LoginErrorResponse,
  LoginSuccessReponse,
} from '../../models/auth-response.model';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  login(username: string, password: string): Observable<any> {
    return this.http.post<LoginErrorResponse | LoginSuccessReponse>(
      `${this.apiUrl}/login`,
      { username, password }
    );
  }

  logout() {
    sessionStorage.clear();
    this.isLoggedIn$.next(false);
  }

  signUp(username: string, password: string, email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, {
      username,
      password,
      email,
    });
  }

  getUserId(): number {
    const token = localStorage.getItem('access_token');
    if (token) {
      const decodedToken = jwtDecode(token);
      //   console.log(decodedToken);
      return +decodedToken.sub;
    }
    return 0;
  }
}

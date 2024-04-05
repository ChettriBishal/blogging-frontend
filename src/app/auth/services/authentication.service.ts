import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode} from 'jwt-decode';
import { BehaviorSubject, Observable} from 'rxjs';
import { LoginErrorResponse, LoginSuccessReponse } from '../auth-response.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:5000'; //  API endpoint for user authentication



  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInSubject.asObservable();

  setLoggedIn(status: boolean) {
    this.loggedInSubject.next(status);
  }

  isLoggedIn(): boolean {
    return this.loggedInSubject.getValue(); // Access the current value directly
  }

  private userNameSubject= new BehaviorSubject<string>('null');
  userName$ = this.userNameSubject.asObservable();

  setUserName(username: string) {
    this.userNameSubject.next(username);
  }

  getUserName(): string {
    return this.userNameSubject.getValue(); // Access the current value directly
  }

  login(username: string, password: string): Observable<any> {
    /*Service to handle login */
    console.log('login request made');
    return this.http.post<LoginErrorResponse | LoginSuccessReponse>(`${this.apiUrl}/login`, { username, password });
  }

  logout() {
    /* remove the access_token upon logging out*/
    sessionStorage.clear();
  }

  signUp(username: string, password: string, email: string): Observable<any> {
    /*Service to enable user to signup */
    console.log('signup request made');
    return this.http.post<any>(`${this.apiUrl}/signup`, {username, password, email});
  }
  
  isUserLoggedIn(): boolean {
    /* To check if the user is logged in */
    return !!sessionStorage.getItem('access_token');
  }

  getCurrentUser(): number {
    const token = localStorage.getItem('access_token');
    if(token) {
      const decodedToken = jwtDecode(token);
      return +decodedToken.sub;
    }
    return 0;
  }

}
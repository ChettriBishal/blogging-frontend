import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/personal'; // Replace with your actual API endpoint

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  getCurrentUser(): Observable<any> {
    // console.log(this.activatedRoute.snapshot.paramMap);

    const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('access_token')}`); // Assuming access_token is stored in sessionStorage

    return this.http.get<any>(this.apiUrl, {headers});
  }

}

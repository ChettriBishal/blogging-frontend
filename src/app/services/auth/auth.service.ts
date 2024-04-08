import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { LoginErrorResponse, LoginSuccessReponse } from "../../models/auth-response.model";


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient){

    }

    isLoggedIn$ = new BehaviorSubject<boolean>(false);

    login(username: string, password: string): Observable<any> {
        this.isLoggedIn$.next(true);
        return this.http.post<LoginErrorResponse | LoginSuccessReponse>(`${environment.apiUrl}/login`, { username, password });
    }

    logout() {
        sessionStorage.clear();
        this.isLoggedIn$.next(false);
    }


    signUp(username: string, password: string, email: string): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/signup`, {username, password, email});
    }


}
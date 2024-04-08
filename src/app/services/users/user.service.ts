import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    getCurrentUser() : number {
        const token = localStorage.getItem('access_token');
        if(token) {
            const decodedToken = jwtDecode(token);
            return +decodedToken;
        }
        return 0;
    }

    isUserLoggedIn(): boolean {
        return !!sessionStorage.getItem('access_token');
    }

}
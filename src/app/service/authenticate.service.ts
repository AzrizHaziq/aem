import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticateService {

    constructor(private http: HttpClient) {
    }

    login = (email, password): Observable<any> => this.http.post('http://52.76.7.57:3000/api/auth/login', {
        email, password
    })

}

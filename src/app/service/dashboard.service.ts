import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private http: HttpClient) {
    }

    getDashboard = (): Observable<any> => this.http.get('http://52.76.7.57:3000/api/dashboard');
}

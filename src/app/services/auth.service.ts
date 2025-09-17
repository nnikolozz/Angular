import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    // backend endpoint: POST /api/auth/register
    return this.http.post(`${this.apiUrl}/api/auth/register`, user);
  }

  login(credentials: any): Observable<any> {
    // backend endpoint: POST /api/auth/login
    return this.http.post(`${this.apiUrl}/api/auth/login`, credentials);
  }
}

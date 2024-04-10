import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${BASE_URL}/auth/login`, {
      username,
      password,
    });
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${BASE_URL}/auth/register`, {
      username,
      email,
      password,
    });
  }
}

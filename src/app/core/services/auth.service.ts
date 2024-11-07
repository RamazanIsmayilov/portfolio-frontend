import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:5001/auth'

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  register(userData: {firstname: string, lastname: string, email: string, password: string}):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/register`, userData)
  }

}

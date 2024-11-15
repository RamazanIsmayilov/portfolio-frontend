import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginDto } from '../models/auth/login.model';
import { RegisterDto } from '../models/auth/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  private apiUrl = `${environment.apiUrl}/auth`

  login(credentials: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  register(userData: RegisterDto):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/register`, userData)
  }
}
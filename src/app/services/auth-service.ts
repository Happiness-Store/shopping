import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user?: User;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
   private apiUrl = '/api/login.php';

  constructor(
    private http: HttpClient
  ) {}

  login(
    email: string,
    password: string
  ): Observable<LoginResponse> {

    return this.http
      .post<LoginResponse>(
        this.apiUrl,
        {
          email,
          password
        }
      )
      .pipe(
        tap(response => {

          if (response.success && response.user) {

            localStorage.setItem(
              'currentUser',
              JSON.stringify(response.user)
            );
          }

        })
      );
  }

  getCurrentUser(): User | null {

    const user = localStorage.getItem('currentUser');

    if (!user) {
      return null;
    }

    return JSON.parse(user);
  }

  isLoggedIn(): boolean {

    return this.getCurrentUser() !== null;
  }

  isAdmin(): boolean {

    return this.getCurrentUser()?.role === 'admin';
  }

  logout(): void {

    localStorage.removeItem('currentUser');
  }
}

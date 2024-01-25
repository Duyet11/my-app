import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, LoginFormResponse } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  constructor() {}

  login(user: User) {
    return this.http.post<LoginFormResponse>(
      'https://hoadv-nodejs.vercel.app/auth/login',
      user
    );
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiAdminUrl = 'https://hoadv-nodejs.vercel.app/students'; // khai bao apiUrl
  http = inject(HttpClient); // inject bien http

  constructor() {}

  getUserListAdmin(): Observable<User[]> {
    return this.http.get<User[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }
}
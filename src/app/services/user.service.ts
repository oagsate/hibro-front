import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RO, User } from '../models/index.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user?: User;

  constructor(private http: HttpClient) {}

  login(param: any) {
    return this.http.post<any>(`${environment.apiUrl}login`, param);
  }

  register(param: any) {
    return this.http.post<any>(`${environment.apiUrl}register`, param);
  }

  logout() {
    return this.http.post<any>(`${environment.apiUrl}logout`, {});
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}users`);
  }

  getSelf() {
    return this.http.get<User>(`${environment.apiUrl}self`);
  }

  getByUid(uid: number) {
    return this.http.get<User>(`${environment.apiUrl}users/${uid}`);
  }

  update(param: User) {
    return this.http.put<User>(`${environment.apiUrl}users`, param);
  }

  clear() {
    this.user = undefined;
  }

  init(user: User) {
    this.user = user;
  }
}

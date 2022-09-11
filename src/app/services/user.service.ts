import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RO, User } from '../models/index.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user?: User;

  constructor(private http: HttpClient) {}

  login(param: any) {
    return this.http.post<any>('/api/login', param);
  }

  register(param: any) {
    return this.http.post<any>('/api/register', param);
  }

  logout() {
    return this.http.post<any>('/api/logout', {});
  }

  getAll() {
    return this.http.get<User[]>('/api/users');
  }

  getSelf() {
    return this.http.get<User>('/api/self');
  }

  getByUid(uid: number) {
    return this.http.get<User>(`/api/users/${uid}`);
  }

  update(param: User) {
    return this.http.put<User>(`/api/users`, param);
  }

  clear() {
    this.user = undefined;
  }

  init(user: User) {
    this.user = user;
  }
}

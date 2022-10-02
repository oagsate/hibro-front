import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListType, RO, Thought } from '../models/index.model';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Thought[]>(`${environment.apiUrl}thought`).pipe(
      tap((v) => {
        v.forEach((item: any) => {
          item.type = ListType.Thought;
        });
      })
    );
  }

  getByUid(uid: number) {
    return this.http
      .get<Thought[]>(`${environment.apiUrl}thought/getByUid/${uid}`)
      .pipe(
        tap((v) => {
          v.forEach((item: any) => {
            item.type = ListType.Thought;
          });
        })
      );
  }

  create(param: any) {
    return this.http.post<any>(`${environment.apiUrl}thought`, param);
  }

  delete(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}thought`, {
      params: { id },
    });
  }
}

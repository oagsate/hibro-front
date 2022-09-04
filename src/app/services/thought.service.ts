import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ListType, RO, Thought } from '../models/index.model';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Thought[]>('/api/thought').pipe(
      tap((v) => {
        v.forEach((item: any) => {
          item.type = ListType.Thought;
        });
      })
    );
  }

  getByUid(uid: number) {
    return this.http.get<Thought[]>(`/api/thought/getByUid/${uid}`).pipe(
      tap((v) => {
        v.forEach((item: any) => {
          item.type = ListType.Thought;
        });
      })
    );
  }

  create(param: any) {
    return this.http.post<any>('/api/thought', param);
  }

  delete(id: number) {
    return this.http.delete<any>('/api/thought', { params: { id } });
  }
}
